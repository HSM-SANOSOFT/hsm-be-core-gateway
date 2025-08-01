import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

import { EstadisticaChatbotDto } from './dto/estadisitca_chatbot.dto';

@Controller('common')
export class CommonController {
  constructor(
    @Inject(sNames.hsm_be_core_common_name) private client: ClientProxy,
  ) {}

  @Get('chatbotMenus/:id')
  chatbotMenus(@Param('id') id: string) {
    return this.client.send('chatbotMenus', { id: id });
  }

  @Get('tipoAtencion')
  tipoAtencion() {
    return this.client.send('tipoAtencion', {});
  }

  @Get('tipoServiciosChat')
  tipoServiciosChat() {
    return this.client.send('tipoServiciosChat', {});
  }

  @Post('chatbot/estadistica')
  estadisticaChatbot(@Body() body: EstadisticaChatbotDto) {
    return this.client.send('estadisticaChatbot', body);
  }
}
