import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EstadisticaChatbotDto } from 'src/api/dto/core/common/estadisitca_chatbot.dto';
import { sNames } from 'src/config';

@Controller('common')
export class CommonController {
  constructor(
    @Inject(sNames.hsm_be_core_common_name) private client: ClientProxy,
  ) {}
}
