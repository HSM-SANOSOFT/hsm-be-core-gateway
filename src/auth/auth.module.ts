import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { JwtStrategy } from '../../guards/strategies/auth.strategy';
import { AuthController } from './auth.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importar variables de entorno
    JwtModule.register({
      global: true,
      secret: envs.JWT_SECRET,
    }),
    ClientsModule.register([
      {
        name: ms.AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.AUTH_MICROSERVICE_HOST,
          port: envs.AUTH_MICROSERVICE_PORT,
        },
      },
    ]),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}

const logger = new Logger(`${ms.AUTH_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.AUTH_SERVICE} on port ${envs.AUTH_MICROSERVICE_PORT}`,
);
