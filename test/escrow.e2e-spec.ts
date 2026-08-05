import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { createTestApp, cleanDatabase } from './helpers/test-app.helper';
import { registerAndLogin, topUp } from './helpers/auth.helper';
import { Role } from '../generated/prisma/enums';

describe('Escrow & Platform Fee (e2e)', () => {
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

  it('should charge creator totalBudget + 5% fee on campaign creation', async () => {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator@example.com',
      Role.CREATOR,
    );
    await topUp(app, creator.accessToken, 2000000);

    const res = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Test Campaign',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 1000000,
        deadline: '2026-12-31T00:00:00.000Z',
      })
      .expect(201);

    expect(res.body.platformFeeAmount).toBe(50000);
    expect(res.body.totalCharged).toBe(1050000);
    expect(res.body.remainingBudget).toBe(1000000);

    const updatedCreator = await prisma.user.findUniqueOrThrow({
      where: { id: creator.userId },
    });
    expect(updatedCreator.balance).toBe(950000);
  });

  it('should lock budget immediately on clip submission, not on approval', async () => {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator2@example.com',
      Role.CREATOR,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper2@example.com',
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
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        title: 'Clip 1',
        videoUrl: 'https://youtube.com/x',
        campaignId,
      })
      .expect(201);

    const campaign = await prisma.campaign.findUniqueOrThrow({
      where: { id: campaignId },
    });
    expect(campaign.remainingBudget).toBe(950000);
  });

  it('should reject clip submission when budget is insufficient (race condition safe)', async () => {
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
    await topUp(app, creator.accessToken, 200000);

    const campaignRes = await request(app.getHttpServer())
      .post('/campaign')
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({
        title: 'Small Budget',
        description: 'Test',
        rewardPerClip: 50000,
        totalBudget: 50000,
        deadline: '2026-12-31T00:00:00.000Z',
      });

    const campaignId = campaignRes.body.id;

    await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip A', videoUrl: 'https://youtube.com/a', campaignId })
      .expect(201);

    await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({ title: 'Clip B', videoUrl: 'https://youtube.com/b', campaignId })
      .expect(400);
  });

  it('should refund budget on clip rejection and pay clipper 90% on approval', async () => {
    const creator = await registerAndLogin(
      app,
      prisma,
      'creator4@example.com',
      Role.CREATOR,
    );
    const clipper = await registerAndLogin(
      app,
      prisma,
      'clipper4@example.com',
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

    const clipRes = await request(app.getHttpServer())
      .post('/clip')
      .set('Authorization', `Bearer ${clipper.accessToken}`)
      .send({
        title: 'Clip 1',
        videoUrl: 'https://youtube.com/x',
        campaignId,
      });

    const clipId = clipRes.body.id;

    const reviewRes = await request(app.getHttpServer())
      .patch(`/clip/${clipId}/review`)
      .set('Authorization', `Bearer ${creator.accessToken}`)
      .send({ status: 'APPROVED' })
      .expect(200);

    expect(reviewRes.body.platformFeeAmount).toBe(5000);
    expect(reviewRes.body.payoutAmount).toBe(45000);

    const updatedClipper = await prisma.user.findUniqueOrThrow({
      where: { id: clipper.userId },
    });
    expect(updatedClipper.balance).toBe(45000);

    const campaign = await prisma.campaign.findUniqueOrThrow({
      where: { id: campaignId },
    });
    expect(campaign.remainingBudget).toBe(950000);
  });
});
