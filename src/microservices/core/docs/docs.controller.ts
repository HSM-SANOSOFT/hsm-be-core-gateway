import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config/sNames';

import { CreateDocumentoDto } from './dto';

@Controller('docs')
export class DocumentosController {
  constructor(
    @Inject(sNames.hsm_be_core_docs_name) private client: ClientProxy,
  ) {}

  @Get('/:type/:id')
  getDocumento(@Param('type') type: string, @Param('id') id: string) {
    return this.client.send('getDocumentoUrl', { data: { type, id } });
  }

  @Post()
  createDocumento(@Body() data: CreateDocumentoDto) {
    return this.client.send('createDocumento', {
      data: data,
    });
  }
}
