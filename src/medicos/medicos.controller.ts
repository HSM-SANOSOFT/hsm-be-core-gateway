import { Controller, Get, Inject } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller('medicos')
export class MedicosController {
  constructor(
    @Inject(envs.MEDICOS_MICROSERVICE_NAME) private readonly Client,
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
}
