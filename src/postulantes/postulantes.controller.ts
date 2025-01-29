import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('postulantes')
export class PostulantesController {
  constructor(@Inject('POSTULANTES_SERVICE') private readonly client) {}

  private readonly logger = new Logger(PostulantesController.name);

  @Get('findAll')
  findAll() {
    this.logger.log('findAll');
    return this.client.send('findAll', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
