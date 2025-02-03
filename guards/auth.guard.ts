/*import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { envs } from 'config';

import { JwtStrategy } from './strategies/auth.strategy';

@Injectable()
export class AuthTokenGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtStrategy: JwtStrategy,
  ) {}

  logger = new Logger('GATEWAY GUARD');

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    if (isPublic) {
      this.logger.log('Public endpoint - skipping auth guard');
      return true;
    }

    if (envs.ENVIRONMENT !== 'Prod') {
      this.logger.log('Development environment - bypassing auth guard');
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      this.logger.error('Token is missing');
      throw new UnauthorizedException('Token is missing');
    }

    // Use your custom JwtStrategy to validate the token
    const payload = await this.jwtStrategy.validate({ token });

    if (!payload) {
      return false;
    }

    request.user = payload;
    return true;
  }
}
  */
