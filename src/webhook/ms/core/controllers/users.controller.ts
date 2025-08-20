import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger();
  constructor(
    @Inject(sNames.hsm_be_core_users_name) private client: ClientProxy,
  ) {}
}
