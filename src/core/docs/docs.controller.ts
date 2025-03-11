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
//import { memoryStorage } from 'multer';
import { catchError } from 'rxjs';

@Controller('docs')
export class DocumentosController {
  /*
    @Inject(envs.HSM_BE_CORE_DOCS_NAME)
    private client: ClientProxy;

    @Post('/gsr/guardar')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: memoryStorage(),
        }),
    )
    guardarGSRDocumentosRecibidos(
        @Body() data: any,
        @UploadedFile() file?: Express.Multer.File,
    ) {

        let parsedData;
        try {
            const jsonString =
                typeof data?.body === 'string'
                    ? data.body.replace(/\\/g, '/')
                    : data.body;
            parsedData = JSON.parse(jsonString);
        } catch (error) {
            throw new RpcException(`Error al parsear JSON: ${error.message}`);
        }

        const payload = {
            GSR_DOCUMENTOS: parsedData,
            file: file,
        };

        return this.client.send('guardarGSRDocumentosRecibidos', payload).pipe(
            catchError(err => {
                throw new RpcException(err);
            }),
        );
    }
        */
}