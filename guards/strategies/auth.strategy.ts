import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { envs } from 'config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DatabaseService } from 'src/auth/database/database.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly databaseService: DatabaseService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: envs.JWT_SECRET,
    });
  }

  logger = new Logger('GATEWAY STRATEGY');

  async validate(payload: any) {
    const token = payload.token;
    const decode = this.jwtService.decode(token);
    const { user_id, ip } = decode;

    try {
      this.jwtService.verify(token);
    } catch (error) {
      if (error.message === 'jwt expired') {
        this.logger.log('Token Expired');
        await this.databaseService.updateStatus(user_id, token);
        throw new UnauthorizedException({
          message: 'Token has expired',
          ip,
        });
      }
      throw new UnauthorizedException('Invalid token');
    }

    const activeToken = await this.databaseService.retriveActiveToken(user_id);
    if (activeToken) {
      if (activeToken === token) {
        return payload;
      } else {
        const oldToken = activeToken;
        await this.databaseService.updateStatus(user_id, oldToken);
        this.logger.log('Another Session Active');
        throw new UnauthorizedException({
          message: 'Token has expired',
          ip: ip,
        });
      }
    } else {
      this.logger.log('No active token found');
      throw new UnauthorizedException('No active token found');
    }
  }
}
