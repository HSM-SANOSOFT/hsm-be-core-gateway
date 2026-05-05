import { Body, Controller, Get, Inject, Param, Post,Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDocumentoDto, DocumentTypeDto } from 'src/api/dto/core/docs';
import { sNames } from 'src/config/sNames';

@Controller('docs')
export class DocsController {
  private readonly logger = new Logger(DocsController.name);
  constructor(
    @Inject(sNames.hsm_be_core_docs_name) private client: ClientProxy,
  ) {}

  @Get('/:type/:id')
  getDocumento(@Param('type') type: DocumentTypeDto, @Param('id') id: string) {
    this.logger.debug(`Fetching document of type: ${type} with ID: ${id}`);
    return this.client.send('getDocumento', { data: { type, id } });
  }

  @Post()
  createDocumento(@Body() data: CreateDocumentoDto) {
    this.logger.debug(`Creating document with data: ${JSON.stringify(data)}`);
    return this.client.send('createDocumento', {
      data: data,
    });
  }
}
