import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

import { GetPatientType } from './type/patient';

@Controller()
export class PacienteController {
  constructor(
    @Inject(sNames.hsm_be_his_paciente) private client: ClientProxy,
  ) {}
  @Get('Patient/:id')
  getPatientbyId(@Param('id', ParseIntPipe) id: number) {
    const payload: GetPatientType = { param: { id } };
    return this.client.send('getPatient', payload);
  }
  @Get('Patient')
  getPatientByIdentifier(
    @Query('identifier')
    identifier: string,
  ) {
    if (!identifier) {
      throw new BadRequestException('Query param "identifier" is required');
    }
    const [system, value] = identifier.split('|');
    const payload: GetPatientType = {
      query: { identifier: { system, value } },
    };
    if (system !== 'https://fhir.hospitalsm.org/IdentifierSystem/ni') {
      throw new BadRequestException('Invalid identifier system');
    }
    return this.client.send('getPatient', payload);
  }

  @Get('Patient/:id/Consent')
  getPatientConsent(
    @Param('id') id: string,
    @Query('category') category?: string,
    @Query('status') status?: string,
  ) {
    return this.client.send('getPatientConsent', {
      id,
      category,
      status,
    });
  }
}
