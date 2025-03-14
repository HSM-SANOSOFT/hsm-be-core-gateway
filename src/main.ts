import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RcpCustomExceptionFilter } from 'exceptions/rpc-custom-exception.filter';

import { envs } from '../config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new RcpCustomExceptionFilter());
  await app.listen(envs.hsm_be_core_gateway_port);
}
void bootstrap();
