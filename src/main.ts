import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { ThrottlerExceptionFilter } from './common/filters/throttler-exception.filter';
import { ThrottlerModule } from '@nestjs/throttler';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', process.env.FRONTEND_URL].filter(Boolean),
    credentials: true,
  });

  app.useGlobalFilters(new ThrottlerExceptionFilter());

  app.use(cookieParser());

  (ThrottlerModule.forRoot([
    {
      name: 'default',
      ttl: 60000,
      limit: process.env.NODE_ENV === 'test' ? 1000 : 100,
    },
  ]),
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    ));

  const config = new DocumentBuilder()
    .setTitle('Klipa API')
    .setDescription(
      'API dokumentasi untuk Klipa — platform yang menghubungkan Creator (pembuat campaign video) dengan Clipper (pembuat klip untuk reward)',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'access_token',
    )
    .addTag('Auth', 'Registrasi, login, refresh token, profil')
    .addTag('Users', 'Manajemen profil dan top-up saldo')
    .addTag('Campaign', 'CRUD campaign oleh Creator')
    .addTag('Clip', 'Submit dan review klip oleh Clipper/Creator')
    .addTag('Dispute', 'Pengajuan dan resolusi sengketa klip')
    .addTag('Withdrawal', 'Penarikan saldo dan persetujuan admin')
    .addTag('Admin', 'Moderasi user, campaign, dan analitik platform')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
