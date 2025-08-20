import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDocumentoDto, DocumentTypeDto } from 'src/api/dto/core/docs';
import { sNames } from 'src/config/sNames';

@Controller('docs')
export class DocsController {
  constructor(
    @Inject(sNames.hsm_be_core_docs_name) private client: ClientProxy,
  ) {}
}
