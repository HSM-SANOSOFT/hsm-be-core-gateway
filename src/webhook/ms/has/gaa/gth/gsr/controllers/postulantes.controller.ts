import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('postulantes')
export class PostulantesController {
  constructor(
    @Inject(sNames.hsm_be_has_gaa_gth_gsr_postulantes_name)
    private client: ClientProxy,
  ) {}
}
