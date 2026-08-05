import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { createTestApp, cleanDatabase } from './helpers/test-app.helper';
import { registerAndLogin, topUp } from './helpers/auth.helper';
import { Role } from 'generated/prisma/enums';

describe('Admin (e2e)', () => {
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

  it('should suspend user and block subsequent login', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper@example.com',
      Role.CLIPPER,
    );

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/suspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'Melanggar T&C' })
      .expect(200);

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'clipper@example.com', password: 'password123' })
      .expect(403);
  });

  it('should reject suspending an ADMIN account', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const admin2 = await registerAndLogin(
      app,
      prisma,
      'admin2@example.com',
      Role.ADMIN,
    );

    await request(app.getHttpServer())
      .patch(`/admin/users/${admin2.userId}/suspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'test' })
      .expect(400);
  });

  it('should reject suspending an already-suspended user', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper@example.com',
      Role.CLIPPER,
    );

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/suspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'test' });

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/suspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'test lagi' })
      .expect(400);
  });

  it('should unsuspend user and allow login again', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper@example.com',
      Role.CLIPPER,
    );

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/suspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'test' });

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/unsuspend`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .expect(200);

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'clipper@example.com', password: 'password123' })
      .expect(201);
  });

  it('should require reason when closing campaign', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator@example.com',
      Role.CREATOR,
    );
    await topUp(app, creator.accessToken, 2000000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });

    await request(app.getHttpServer())
      .patch(`/admin/campaign/${campaignRes.body.id}/close`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({})
      .expect(400);
  });

  it('should close campaign without refunding remaining budget', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator@example.com',
      Role.CREATOR,
    );
    await topUp(app, creator.accessToken, 2000000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });

    const campaignId = campaignRes.body.id;
    const balanceBefore = (
      await prisma.user.findUniqueOrThrow({ where: { id: creator.userId } })
    ).balance;

    const closeRes = await request(app.getHttpServer())
      .patch(`/admin/campaign/${campaignId}/close`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'Terindikasi penipuan' })
      .expect(200);

    expect(closeRes.body.status).toBe('BANNED');

    const campaign = await prisma.campaign.findUniqueOrThrow({
      where: { id: campaignId },
    });
    expect(campaign.remainingBudget).toBe(1000000);

    const balanceAfter = (
      await prisma.user.findUniqueOrThrow({ where: { id: creator.userId } })
    ).balance;
    expect(balanceAfter).toBe(balanceBefore);
  });

  it('should reject clip submission to a BANNED campaign', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
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
    await topUp(app, creator.accessToken, 2000000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });

    const campaignId = campaignRes.body.id;

    await request(app.getHttpServer())
      .patch(`/admin/campaign/${campaignId}/close`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ reason: 'Penipuan' });

    await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip', videoUrl: 'https://youtube.com/x', campaignId })
      .expect(400);
  });

  it('should reject non-admin access to admin endpoints', async () => {
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

    await request(app.getHttpServer())
      .patch(`/admin/users/${clipper.userId}/suspend`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ reason: 'test' })
      .expect(403);

    await request(app.getHttpServer())
      .get('/admin/analytics')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .expect(403);
  });

  it('should return accurate analytics data', async () => {
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin@example.com',
      Role.ADMIN,
    );
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator@example.com',
      Role.CREATOR,
    );
    await topUp(app, creator.accessToken, 2000000);

    await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });

    const res = await request(app.getHttpServer())
      .get('/admin/analytics')
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .expect(200);

    expect(res.body.users.total).toBe(2); 
    expect(res.body.campaign.total).toBe(1);
    expect(res.body.revenue.total).toBe(50000);
  });
});
