import { BadRequestException, Body, Controller, Inject, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FilesInterceptor } from '@nestjs/platform-express';
import { sNames } from '../../../../config/sNames';
import { validatePreparedEmail } from '../../../dto/core/coms/prepared-email';

@Controller('coms')
export class PreparedEmailController {
  constructor(@Inject(sNames.hsm_be_core_coms_name) private readonly client: ClientProxy) {}

  @Post('email/send-prepared')
  @UseInterceptors(FilesInterceptor('files', 10, { limits: { fileSize: 10485760, fieldSize: 2200000, fields: 1 } }))
  send(@Body('data') input: unknown, @UploadedFiles() files?: Express.Multer.File[]) {
    let data: ReturnType<typeof validatePreparedEmail>;
    try { data = validatePreparedEmail(typeof input === 'string' ? JSON.parse(input) : input); }
    catch { throw new BadRequestException('Invalid prepared email'); }
    // No content logging. The legacy endpoint remains unchanged.
    return this.client.send('sendPreparedEmail', { data, files: files ?? [] });
  }
}
