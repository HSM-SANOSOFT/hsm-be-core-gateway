import { Controller, Get, Inject } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as ms from 'config/services';
import { catchError } from 'rxjs';

@Controller('farmacia')
export class FarmaciaController {
  constructor(@Inject(ms.FARMACIA_SERVICE) private readonly Client) {}

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
}
