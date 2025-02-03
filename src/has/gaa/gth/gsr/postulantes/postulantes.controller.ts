import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'config';

@Controller()
export class PostulantesController {
    @Inject(envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME) private client: ClientProxy;

    @Get(':CI')
    findOneCedula(@Param('CI') CI: string) {
        return this.client.send('findOneCI', { CI });
    }

    @Get(':id')
    findOneId(): string {
        return 'un postulante';
    }


}
