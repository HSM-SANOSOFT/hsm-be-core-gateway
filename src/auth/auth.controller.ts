import {
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  Ip,
  Logger,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import * as ms from 'config/services';
import { Public } from 'decorators/public.decorator';
import { catchError } from 'rxjs';

import { ChangePasswordDto } from './dto/changePassword.dto';
import { GenerateCodeDto } from './dto/generateCode.dto';
import { LoginDto } from './dto/login.dto';
import { UserMenuDto } from './dto/usermenu.dto';
import { ValidateCodeDto } from './dto/validateCode.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(ms.AUTH_SERVICE) private readonly client: ClientProxy) {}

  logger = new Logger('Gateway');

  @Public()
  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Public()
  @Get('init/ms')
  InitMS() {
    return this.client.send('init', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Public()
  @Post('login')
  login(@Ip() ip: string, @Body() loginDto: LoginDto) {
    ip = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
    const payload = { ...loginDto, ip };
    return this.client.send('login', payload).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('changepassword')
  changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return this.client.send('changePassword', changePasswordDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Public()
  @Get('logout')
  logout(@Headers('authorization') authHeader: string) {
    return this.client.send('logout', authHeader).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('usermenu')
  usermenu(@Body() usermenuDto: UserMenuDto) {
    return this.client.send('usermenu', usermenuDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('generateCode')
  generateCode(@Ip() ip: string, @Body() generateCodeDto: GenerateCodeDto) {
    ip = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
    const payload = { ...generateCodeDto, ip };
    return this.client.send('generateCode', payload).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('validateCode')
  validateCode(@Body() validateCodeDto: ValidateCodeDto) {
    return this.client.send('validateCode', validateCodeDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('errorTest')
  errorTest() {
    return this.client.send('errorTest', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
