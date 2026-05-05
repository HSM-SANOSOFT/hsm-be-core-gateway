import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EstadisticaChatbotDto } from 'src/api/dto/core/common/estadisitca_chatbot.dto';
import { sNames } from 'src/config';
import {Logger} from "@nestjs/common";

@Controller('common')
export class CommonController {
  private readonly logger = new Logger(CommonController.name);
  constructor(
    @Inject(sNames.hsm_be_core_common_name) private client: ClientProxy,
  ) {}

  @Get('chatbotMenus/:id')
  chatbotMenus(@Param('id') id: string) {
    this.logger.debug(`Fetching chatbot menus for ID: ${id}`);
    return this.client.send('chatbotMenus', { id: id });
  }

  @Get('tipoAtencion')
  tipoAtencion() {
    this.logger.debug(`Fetching tipoAtencion`);
    return this.client.send('tipoAtencion', {});
  }

  @Get('tipoServiciosChat')
  tipoServiciosChat() {
    this.logger.debug(`Fetching tipoServiciosChat`);
    return this.client.send('tipoServiciosChat', {});
  }

  @Post('chatbot/estadistica')
  estadisticaChatbot(@Body() body: EstadisticaChatbotDto) {
    this.logger.debug(`Fetching chatbot statistics with body: ${JSON.stringify(body)}`);
    return this.client.send('estadisticaChatbot', body);
  }
}
