import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthTokenGuard } from '../guards/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ComsModule } from './coms/coms.module';
import { ExamenesModule } from './examenes/examenes.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { FarmaciaModule } from './farmacia/farmacia.module';
import { HospitalizacionModule } from './hospitalizacion/hospitalizacion.module';
import { MedicosModule } from './medicos/medicos.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { PersonalModule } from './personal/personal.module';
import { UsersModule } from './users/users.module';
import { WebsocketModule } from './websocket/websocket.module';
import { PostulantesModule } from './postulantes/postulantes.module';

@Module({
  imports: [
    AuthModule,
    ComsModule,
    ExamenesModule,
    FacturacionModule,
    FarmaciaModule,
    HospitalizacionModule,
    MedicosModule,
    PacientesModule,
    PersonalModule,
    UsersModule,
    WebsocketModule,
    CommonModule,
    PostulantesModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthTokenGuard }],
  exports: [],
})
export class AppModule {}
