import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { createTestApp, cleanDatabase } from './helpers/test-app.helper';
import { registerAndLogin, topUp } from './helpers/auth.helper';
import { Role } from '../generated/prisma/enums';

describe('Withdrawal (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const setup = await createTestApp();
    app = setup.app;
    prisma = setup.prisma;
  });

  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  afterAll(async () => {
    await app.close();
  });

  async function setupClipperWithBalance() {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator@example.com',
      Role.CREATOR,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper@example.com',
      Role.CLIPPER,
    );
    const clipper2 = await registerAndLogin(
      app,
      prisma,
      'clipper2@example.com',
      Role.CLIPPER,
    );
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );

    await topUp(app, creator.accessToken, 2000000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test',
        description: 'Test',
        rewardPerClip: 100000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });
    const campaignId = campaignRes.body.id;

    const clipRes = await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip', videoUrl: 'https://youtube.com/x', campaignId });

    await request(app.getHttpServer())
      .patch(`/clip/${clipRes.body.id}/review`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ status: 'APPROVED' });

    return { creator, clipper, clipper2, admin };
  }

  it('should reject withdrawal request without bank info', async () => {
    const { clipper } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 })
      .expect(400);
  });

  it('should update bank info successfully', async () => {
    const { clipper } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      })
      .expect(200);
  });

  it('should reject withdrawal exceeding balance', async () => {
    const { clipper } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 999999999 })
      .expect(400);
  });

  it('should create withdrawal request without deducting balance immediately', async () => {
    const { clipper } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    const balanceBefore = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 })
      .expect(201);

    const balanceAfter = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    expect(balanceAfter).toBe(balanceBefore);
  });

  it('should reject viewing withdrawal detail by non-owner, allow owner and admin', async () => {
    const { clipper, clipper2, admin } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    const wdRes = await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 });

    const withdrawalId = wdRes.body.id;

    await request(app.getHttpServer())
      .get(`/withdrawal/${withdrawalId}`)
      .set('Authorization', `Bearer ${clipper2.accessToken}`)
      .expect(403);

    await request(app.getHttpServer())
      .get(`/withdrawal/${withdrawalId}`)
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .expect(200);

    await request(app.getHttpServer())
      .get(`/withdrawal/${withdrawalId}`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .expect(200);
  });

  it('should reject pending list and resolve access for non-admin', async () => {
    const { clipper } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .get('/withdrawal/pending')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .expect(403);
  });

  it('should approve withdrawal, calculate tax, and deduct full amount from balance', async () => {
    const { clipper, admin } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    const wdRes = await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 });

    const balanceBefore = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    const resolveRes = await request(app.getHttpServer())
      .patch(`/withdrawal/${wdRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'APPROVED' })
      .expect(200);

    expect(resolveRes.body.taxAmount).toBeCloseTo(5000);
    expect(resolveRes.body.netAmount).toBeCloseTo(45000);

    const balanceAfter = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    expect(balanceAfter).toBe(balanceBefore - 50000);
  });

  it('should reject resolving already-processed withdrawal', async () => {
    const { clipper, admin } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    const wdRes = await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 });

    await request(app.getHttpServer())
      .patch(`/withdrawal/${wdRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'APPROVED' });

    await request(app.getHttpServer())
      .patch(`/withdrawal/${wdRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'REJECTED' })
      .expect(400);
  });

  it('should reject withdrawal without balance change when rejected', async () => {
    const { clipper, admin } = await setupClipperWithBalance();

    await request(app.getHttpServer())
      .patch('/withdrawal/bank-info')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        bankName: 'BCA',
        bankAccountNumber: '123456',
        bankAccountName: 'Clipper Satu',
      });

    const wdRes = await request(app.getHttpServer())
      .post('/withdrawal')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ amount: 50000 });

    const balanceBefore = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    await request(app.getHttpServer())
      .patch(`/withdrawal/${wdRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'REJECTED', rejectionReason: 'Rekening tidak valid' })
      .expect(200);

    const balanceAfter = (
      await prisma.user.findUniqueOrThrow({ where: { id: clipper.userId } })
    ).balance;

    expect(balanceAfter).toBe(balanceBefore);
  });
});
