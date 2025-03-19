import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'src/config';

@Controller('compensacion')
export class CompensacionController {
  constructor(
    @Inject(envs.hsm_be_has_cob_gdp_compensacion) private client: ClientProxy,
  ) {}
}
