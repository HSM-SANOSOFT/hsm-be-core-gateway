import { Module } from '@nestjs/common';
import { PacienteController } from 'src/api/ms/his/controllers/paciente.controller';

@Module({
  controllers: [PacienteController],
})
export class HisModule {}
