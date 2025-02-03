import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller()
export class PostulantesController {
    @Inject(envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME) private client: ClientProxy;

    @Get('/getPostulanteId/:CI')
    findOnePostulanteId(@Param('CI') CI: string) {
        return this.client.send('getPostulanteId', {}).pipe(
            catchError(err => {
                throw new RpcException(err);
            }),
        );;
    }

    @Get('/getPostulante/:id')
    findOnePostulante(@Param('id') id: string) {
        return this.client.send('getPostulante', { id }).pipe(
            catchError(err => {
                throw new RpcException(err);
            }),
        );;
    }


}
