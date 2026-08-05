import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { createTestApp, cleanDatabase } from './helpers/test-app.helper';
import { registerAndLogin, topUp } from './helpers/auth.helper';
import { Role } from 'generated/prisma/enums';

describe('Dispute (e2e)', () => {
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

  async function setupRejectedClip() {
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
        title: 'Test Campaign',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      });
    const campaignId = campaignRes.body.id;

    const clipRes = await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip 1', videoUrl: 'https://youtube.com/x', campaignId });
    const clipId = clipRes.body.id;

    await request(app.getHttpServer())
      .patch(`/clip/${clipId}/review`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ status: 'REJECTED', feedback: 'Ditolak dulu' });

    return { creator, clipper, clipper2, admin, campaignId, clipId };
  }

  it('should allow clipper to raise dispute for rejected clip', async () => {
    const { clipper, clipId } = await setupRejectedClip();

    const res = await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Video sudah dipakai Creator di sosmed' })
      .expect(201);

    expect(res.body.status).toBe('PENDING');
  });

  it('should reject dispute from a different clipper (not owner)', async () => {
    const { clipper2, clipId } = await setupRejectedClip();

    await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper2.accessToken}`)
      .send({ clipId, reason: 'Coba ajukan punya orang lain' })
      .expect(403);
  });

  it('should reject duplicate dispute for the same clip', async () => {
    const { clipper, clipId } = await setupRejectedClip();

    await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Pertama' })
      .expect(201);

    await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Coba lagi' })
      .expect(409);
  });

  it('should reject dispute for clip that is not REJECTED', async () => {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator3@example.com',
      Role.CREATOR,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper3@example.com',
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

    const clipRes = await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        title: 'Clip Pending',
        videoUrl: 'https://youtube.com/y',
        campaignId: campaignRes.body.id,
      });

    await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId: clipRes.body.id, reason: 'Coba dispute klip pending' })
      .expect(400);
  });

  it('clipper should only see own disputes; other clipper gets 403 on detail', async () => {
    const { clipper, clipper2, clipId } = await setupRejectedClip();

    const disputeRes = await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Test' });

    const disputeId = disputeRes.body.id;

    const mineRes = await request(app.getHttpServer())
      .get('/dispute/mine')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .expect(200);

    expect(mineRes.body.data.length).toBe(1);

    await request(app.getHttpServer())
      .get(`/dispute/${disputeId}`)
      .set('Authorization', `Bearer ${clipper2.accessToken}`)
      .expect(403);

    await request(app.getHttpServer())
      .get(`/dispute/${disputeId}`)
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .expect(200);
  });

  it('should approve dispute, re-lock budget, and pay clipper 90% of rewardPerClip', async () => {
    const { clipper, admin, campaignId, clipId } = await setupRejectedClip();

    const budgetBeforeDispute = (
      await prisma.campaign.findUniqueOrThrow({ where: { id: campaignId } })
    ).remainingBudget;

    const disputeRes = await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Terbukti video sudah dipakai' });

    const disputeId = disputeRes.body.id;

    await request(app.getHttpServer())
      .patch(`/dispute/${disputeId}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'APPROVED', resolutionNote: 'Setuju' })
      .expect(200);

    const updatedClip = await prisma.clip.findUniqueOrThrow({
      where: { id: clipId },
    });
    expect(updatedClip.status).toBe('APPROVED');
    expect(updatedClip.payoutAmount).toBe(45000);

    const updatedCampaign = await prisma.campaign.findUniqueOrThrow({
      where: { id: campaignId },
    });
    expect(updatedCampaign.remainingBudget).toBe(budgetBeforeDispute - 50000);

    const updatedClipper = await prisma.user.findUniqueOrThrow({
      where: { id: clipper.userId },
    });
    expect(updatedClipper.balance).toBe(45000);
  });

  it('should reject dispute resolution when budget is exhausted', async () => {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator5@example.com',
      Role.CREATOR,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper5@example.com',
      Role.CLIPPER,
    );
    const clipper2 = await registerAndLogin(
      app,
      prisma,
      'clipper6@example.com',
      Role.CLIPPER,
    );
    const admin = await registerAndLogin(
      app,
      prisma,
      'admin5@example.com',
      Role.ADMIN,
    );

    await topUp(app, creator.accessToken, 200000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Tight Budget',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 50000, // cuma cukup untuk 1 clip
        deadline: '2026-12-31T00:00:00.000Z',
      });
    const campaignId = campaignRes.body.id;

    const clipRes = await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip A', videoUrl: 'https://youtube.com/a', campaignId });
    const clipId = clipRes.body.id;

    await request(app.getHttpServer())
      .patch(`/clip/${clipId}/review`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ status: 'REJECTED', feedback: 'Ditolak' });

    const disputeRes = await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Test' });

    await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper2.accessToken}`)
      .send({
        title: 'Clip B (menyalip)',
        videoUrl: 'https://youtube.com/b',
        campaignId,
      })
      .expect(201);

    await request(app.getHttpServer())
      .patch(`/dispute/${disputeRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${admin.accessToken}`)
      .send({ status: 'APPROVED' })
      .expect(400);
  });

  it('should reject dispute resolution by non-admin', async () => {
    const { creator, clipper, clipId } = await setupRejectedClip();

    const disputeRes = await request(app.getHttpServer())
      .post('/dispute')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ clipId, reason: 'Test' });

    await request(app.getHttpServer())
      .patch(`/dispute/${disputeRes.body.id}/resolve`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ status: 'APPROVED' })
      .expect(403);
  });
});
