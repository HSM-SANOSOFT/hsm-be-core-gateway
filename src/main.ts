import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RcpCustomExceptionFilter } from 'exceptions/rpc-custom-exception.filter';

import { envs } from '../config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Gateway');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new RcpCustomExceptionFilter());
  await app.listen(envs.HSM_BE_CORE_GATEWAY_PORT);
  logger.log(`Gateway is active on port ${envs.HSM_BE_CORE_GATEWAY_PORT}`);
}
bootstrap();
