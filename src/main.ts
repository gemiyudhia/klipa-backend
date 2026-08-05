import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { ThrottlerExceptionFilter } from './common/filters/throttler-exception.filter';
import { ThrottlerModule } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ThrottlerExceptionFilter());

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

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
