import { Body, Controller, Inject, Param, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { sNames } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(sNames.hsm_be_core_auth_name) private client: ClientProxy,
  ) {}
}
