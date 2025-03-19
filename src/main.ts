import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      enableDebugMessages: true,
      transform: true,
    }),
  );
  //app.useGlobalFilters(new RcpCustomExceptionFilter());
  await app.listen(envs.hsm_be_core_gateway_port);
}
void bootstrap();
