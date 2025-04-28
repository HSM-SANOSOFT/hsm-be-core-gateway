import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { s } from 'src/config';

@Controller('compensacion')
export class CompensacionController {
  constructor(
    @Inject(s.hsm_be_has_cob_gdp_compensacion_name) private client: ClientProxy,
  ) {}
}
