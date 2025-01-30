import { Body, Controller, Get, Inject, Ip, Param, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { Public } from 'decorators/public.decorator';
import { catchError } from 'rxjs';

import { AllUserDto } from './dto/allusers.dto';
import { DataUserDto } from './dto/datauser.dto';
import { PasswordChangeDto } from './dto/passwordChange.dto';
import { UserUnlockDto } from './dto/userUnlock.dto';
import { ValidateCodeDto } from './dto/validateCode.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(envs.USERS_MICROSERVICE_NAME) private readonly Client: ClientProxy,
  ) {}

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return this.Client.send('init', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('init/msa')
  InitMSA() {
    return this.Client.send('initMSA', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('testsDto')
  testsDto(@Body() testDto: any) {
    return this.Client.send('testsDto', testDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('testError')
  testError() {
    return this.Client.send('testError', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('passwordChange')
  passwordChange(@Body() passwordChangeDto: PasswordChangeDto) {
    return this.Client.send('passwordChange', passwordChangeDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('userUnlock')
  userUnlock(@Body() userUnlockDto: UserUnlockDto) {
    return this.Client.send('userUnlock', userUnlockDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Public()
  @Post('validCode')
  validCode(@Body() validcodeDto: ValidateCodeDto) {
    return this.Client.send('validCode', validcodeDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Public()
  @Post('userMenu')
  userMenu(@Body() usermenuDto: any) {
    return this.Client.send('userMenu', usermenuDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Public()
  @Post('enviocodigo')
  envioCodigo(@Ip() ip: string, @Body() datauserDto: DataUserDto) {
    ip = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
    const payload = { ...datauserDto, ip };
    return this.Client.send('enviocodigo', payload).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('allUsers')
  allUsers(@Body() allUsersDto: AllUserDto) {
    return this.Client.send('allUsers', allUsersDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('getUserData/:userCode')
  getUser(@Param('userCode') userCode: string) {
    return this.Client.send('getUser', { userCode: userCode }).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
