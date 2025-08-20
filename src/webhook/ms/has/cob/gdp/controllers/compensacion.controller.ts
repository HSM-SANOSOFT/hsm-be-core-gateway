import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('compensacion')
export class CompensacionController {
  constructor(
    @Inject(sNames.hsm_be_has_cob_gdp_compensacion_name)
    private client: ClientProxy,
  ) {}
}
