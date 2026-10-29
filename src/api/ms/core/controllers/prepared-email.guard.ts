import { CanActivate, ExecutionContext, Injectable, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { createHash, timingSafeEqual } from 'crypto';

@Injectable()
export class PreparedEmailGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const expected = process.env.MAIL_PREPARED_API_TOKEN;
    if (!expected || expected.length < 32) throw new ServiceUnavailableException('Prepared email transport is not configured');
    const supplied = context.switchToHttp().getRequest<{ headers: Record<string, unknown> }>().headers['x-mail-prepared-token'];
    if (typeof supplied !== 'string' || supplied.length > 1024) throw new UnauthorizedException();
    const digest = (value: string) => createHash('sha256').update(value).digest();
    if (!timingSafeEqual(digest(expected), digest(supplied))) throw new UnauthorizedException();
    return true;
  }
}
