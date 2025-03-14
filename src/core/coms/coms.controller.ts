import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
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
  constructor(@Inject(envs.hsm_be_core_coms) private client: ClientProxy) {}

  @Post('email/send')
  @UseInterceptors(FilesInterceptor('files'))
  sendEmail(
    @Req() req: Request,
    @Body('data')
    datas:
      | string
      | {
          email: string;
          template: TemplateDto;
        },
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    let data: {
      email: string;
      template: TemplateDto;
    };
    if (
      (req.headers['content-type'] as string)?.includes('multipart/form-data')
    ) {
      data = JSON.parse(datas as string) as {
        email: string;
        template: TemplateDto;
      };
    } else {
      data = datas as {
        email: string;
        template: TemplateDto;
      };
      files = [];
    }

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

  @Get('email/resend/:id')
  resendEmail(@Param('id') id: string) {
    return this.client.send('resendEmail', id).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }

  @Post('sms/send')
  sendSms(
    @Body('telefono') telefono: string,
    @Body('templateData') templateData: object,
    @Body('templateName') templateName: string,
    @Body('modulo') modulo: string,
    @Body('cedula') cedula: string,
  ) {
    return this.client
      .send('sendSms', { telefono, templateData, templateName, modulo, cedula })
      .pipe(
        catchError(err => {
          throw new RpcException(err as object);
        }),
      );
  }
}
