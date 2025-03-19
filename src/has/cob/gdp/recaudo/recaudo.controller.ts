import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'config';

@Controller('recaudo')
export class RecaudoController {
  constructor(
    @Inject(envs.hsm_be_has_cob_gdp_recaudo) private client: ClientProxy,
  ) {}
}
