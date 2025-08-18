import { Module } from '@nestjs/common';

import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [PacienteModule],
})
export class HisModule {}
