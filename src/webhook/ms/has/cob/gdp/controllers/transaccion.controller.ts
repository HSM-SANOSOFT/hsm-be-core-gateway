import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('transaccion')
export class TransaccionController {
  constructor(
    @Inject(sNames.hsm_be_has_cob_gdp_transaccion_name)
    private client: ClientProxy,
  ) {}
}
