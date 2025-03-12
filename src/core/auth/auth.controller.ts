import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'config';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(envs.HSM_BE_CORE_AUTH_NAME) private client: ClientProxy,
  ) {}
}
