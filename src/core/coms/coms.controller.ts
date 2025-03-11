import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { FilesInterceptor } from '@nestjs/platform-express';
import { envs } from 'config';
import { Express } from 'express';
import { catchError } from 'rxjs';

import { TemplateDto } from './dto/templateDto';

@Controller('coms')
export class ComsController {
  @Inject(envs.HSM_BE_CORE_COMS_NAME) private client: ClientProxy;

  @Post('sendEmail')
  @UseInterceptors(FilesInterceptor('files'))
  sendEmail(
    @Body('data') datas: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const data = JSON.parse(datas) as {
      email: string;
      template: TemplateDto;
    };

    const payload = {
      data,
      files,
    };
    return this.client.send('sendEmail', payload).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }

  @Get('reenviar/:id')
  resendEmail(@Param('id') id: string) {
    return this.client.send('resendEmail', id).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }
}
