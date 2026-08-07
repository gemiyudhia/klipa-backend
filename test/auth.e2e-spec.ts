import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { createTestApp, cleanDatabase } from './helpers/test-app.helper';

describe('Auth (e2e)', () => {
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

  it('should register and login successfully', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      })
      .expect(201);

    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'password123' })
      .expect(201);

    expect(res.body.access_token).toBeDefined();
    expect(res.body.refresh_token).toBeDefined();
  });

  it('should reject login with wrong password', async () => {
    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Test User',
      email: 'test2@example.com',
      password: 'password123',
    });

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test2@example.com', password: 'passwordsalah' })
      .expect(401);
  });

  it('should rotate refresh token and reject reused old token', async () => {
    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Rotation Test',
      email: 'rotation@example.com',
      password: 'password123',
    });

    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'rotation@example.com', password: 'password123' });

    const oldRefreshToken = loginRes.body.refresh_token;

    await new Promise((resolve) => setTimeout(resolve, 1100));

    const firstRefresh = await request(app.getHttpServer())
      .post('/auth/refresh')
      .send({ refreshToken: oldRefreshToken })
      .expect(201);

    expect(firstRefresh.body.refresh_token).not.toBe(oldRefreshToken);

    await request(app.getHttpServer())
      .post('/auth/refresh')
      .send({ refreshToken: oldRefreshToken })
      .expect(401);
  });

  it('should reject login for suspended user', async () => {
    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Suspended User',
      email: 'suspended@example.com',
      password: 'password123',
    });

    await prisma.user.update({
      where: { email: 'suspended@example.com' },
      data: { isSuspended: true },
    });

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'suspended@example.com', password: 'password123' })
      .expect(403);
  });

  it('should return current user profile with valid access token', async () => {
    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'Profile Test',
      email: 'profile@example.com',
      password: 'password123',
      role: 'CREATOR',
    });

    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'profile@example.com', password: 'password123' });

    const res = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${loginRes.body.access_token}`)
      .expect(200);

    expect(res.body.email).toBe('profile@example.com');
    expect(res.body.role).toBe('CREATOR');
    expect(res.body.passwordHash).toBeUndefined();
    expect(res.body.hashedRefreshToken).toBeUndefined();
  });

  it('should reject /auth/me without token', async () => {
    await request(app.getHttpServer()).get('/auth/me').expect(401);
  });
});
