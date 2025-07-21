import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('recaudo')
export class RecaudoController {
  constructor(
    @Inject(sNames.hsm_be_has_cob_gdp_recaudo_name)
    private client: ClientProxy,
  ) {}
}
