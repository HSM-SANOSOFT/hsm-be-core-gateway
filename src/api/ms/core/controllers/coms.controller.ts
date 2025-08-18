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
import { ClientProxy } from '@nestjs/microservices';
import { FilesInterceptor } from '@nestjs/platform-express';
import { TemplateDto } from 'src/api/dto/core/coms/templateDto';
import { sNames } from 'src/config';

@Controller('coms')
export class ComsController {
  constructor(
    @Inject(sNames.hsm_be_core_coms_name) private client: ClientProxy,
  ) {}

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
    return this.client.send('sendEmail', payload);
  }

  @Get('email/resend/:id')
  resendEmail(@Param('id') id: string) {
    return this.client.send('resendEmail', id);
  }

  @Post('sms/send')
  sendSms(
    @Body('telefono') telefono: string,
    @Body('templateData') templateData: object,
    @Body('templateName') templateName: string,
    @Body('modulo') modulo: string,
    @Body('cedula') cedula: string,
  ) {
    return this.client.send('sendSms', {
      telefono,
      templateData,
      templateName,
      modulo,
      cedula,
    });
  }
}
