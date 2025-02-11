/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller('postulantes')
export class PostulantesController {
  @Inject(envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME)
  private client: ClientProxy;
  @Get('/getPostulanteId/:tipoDocumento/:numeroDocumento')
  getPostulanteId(
    @Param('tipoDocumento') tipoDocumento: string,
    @Param('numeroDocumento') numeroDocumento: string,
  ) {
    return this.client
      .send('getPostulanteId', { tipoDocumento, numeroDocumento })
      .pipe(
        catchError(err => {
          throw new RpcException(err);
        }),
      );
  }

  @Get(':ID')
  getPostulante(@Param('ID', ParseIntPipe) ID: number) {
    return this.client.send('getPostulante', { ID }).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post()
  createPostulante(@Body() data: object) {
    return this.client.send('createPostulante', data).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Patch(':ID')
  updatePostulante(@Param('ID', ParseIntPipe) ID: number, @Body() data: any) {
    data.ID = ID;
    return this.client.send('updatePostulante', data).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
  @Delete(':ID')
  deletePostulante(@Param('ID', ParseIntPipe) ID: number) {
    return this.client.send('deletePostulante', { ID }).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
