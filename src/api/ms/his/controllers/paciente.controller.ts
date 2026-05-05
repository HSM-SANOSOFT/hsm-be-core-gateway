import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  Logger
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetPatientType } from 'src/api/type/his/patient';
import { sNames } from 'src/config';

@Controller('Paciente')
export class PacienteController {
  private readonly logger = new Logger(PacienteController.name);
  constructor(
    @Inject(sNames.hsm_be_his_paciente) private client: ClientProxy,
  ) {}
  @Get(':id')
  getPatientbyId(@Param('id', ParseIntPipe) id: number) {
    const payload: GetPatientType = { param: { id } };
    this.logger.debug(`Fetching patient with ID: ${id}`);
    return this.client.send('getPatient', payload);
  }
  @Get()
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
    this.logger.debug(`Fetching patient with identifier: ${identifier}`);
    return this.client.send('getPatient', payload);
  }

  @Get(':id/Consentimiento')
  getPatientConsent(
    @Param('id') id: string,
    @Query('category') category?: string,
    @Query('status') status?: string,
  ) {
    this.logger.debug(`Fetching patient consent for ID: ${id}, category: ${category}, status: ${status}`);
    return this.client.send('getPatientConsent', {
      id,
      category,
      status,
    });
  }
}
