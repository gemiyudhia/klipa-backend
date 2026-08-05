import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PrismaService } from '../../src/prisma/prisma.service';
import { Role } from 'generated/prisma/enums';

export async function registerAndLogin(
  app: INestApplication,
  prisma: PrismaService,
  email: string,
  role: Role = Role.CLIPPER,
) {
  await request(app.getHttpServer())
    .post('/auth/register')
    .send({
      name: email.split('@')[0],
      email,
      password: 'password123',
    });

  await prisma.user.update({ where: { email }, data: { role } });

  const loginRes = await request(app.getHttpServer())
    .post('/auth/login')
    .send({ email, password: 'password123' });

  return {
    accessToken: loginRes.body.access_token,
    refreshToken: loginRes.body.refresh_token,
    userId: (await prisma.user.findUniqueOrThrow({ where: { email } })).id,
  };
}

export async function topUp(
  app: INestApplication,
  accessToken: string,
  amount: number,
) {
  return request(app.getHttpServer())
    .patch('/users/me/topup')
    .set('Authorization', `Bearer ${accessToken}`)
    .send({ amount });
}
