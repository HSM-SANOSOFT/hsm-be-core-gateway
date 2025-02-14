import {
    Body,
    Controller,
    Inject,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { envs } from 'config';
import { memoryStorage } from 'multer';
import { catchError } from 'rxjs';

@Controller('Documentos')
export class DocumentosController {
    @Inject(envs.HSM_BE_CORE_DOCS_NAME)
    private client: ClientProxy;


    @Post('/docs/gsr/guardar')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: memoryStorage(),
        }),
    )
    guardarGSRDocumentosRecibidos(
        @Body() data: object,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const payload = {
            data,
            file: {
                originalname: file.originalname,
                filename: file.originalname, // Use original name since we're not saving it
                size: file.size,
                mimetype: file.mimetype,
                buffer: file.buffer,
            },
        };

        return this.client.send('guardarGSRDocumentosRecibidos', payload).pipe(
            catchError((err) => {
                throw new RpcException(err);
            }),
        );
    }
}
