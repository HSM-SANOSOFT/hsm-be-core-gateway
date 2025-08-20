import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FilesInterceptor } from '@nestjs/platform-express';
import { TemplateDto } from 'src/api/dto/core/coms/templateDto';
import { sNames } from 'src/config';

@Controller('coms')
export class ComsController {
  constructor(
    @Inject(sNames.hsm_be_core_coms_name) private client: ClientProxy,
  ) {}
}
