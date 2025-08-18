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
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('postulantes')
export class PostulantesController {
  @Inject(sNames.hsm_be_has_gaa_gth_gsr_postulantes_name)
  private client: ClientProxy;
  @Get('/getPostulanteId/:tipoDocumento/:numeroDocumento')
  getPostulanteId(
    @Param('tipoDocumento') tipoDocumento: string,
    @Param('numeroDocumento') numeroDocumento: string,
  ) {
    return this.client.send('getPostulanteId', {
      tipoDocumento,
      numeroDocumento,
    });
  }

  @Get(':ID')
  getPostulante(@Param('ID', ParseIntPipe) ID: number) {
    return this.client.send('getPostulante', { ID });
  }

  @Post()
  createPostulante(@Body() data: object) {
    return this.client.send('createPostulante', data);
  }

  @Patch(':ID')
  updatePostulante(@Param('ID', ParseIntPipe) ID: number, @Body() data: any) {
    data.ID = ID;
    return this.client.send('updatePostulante', data);
  }
  @Delete(':ID')
  deletePostulante(@Param('ID', ParseIntPipe) ID: number) {
    return this.client.send('deletePostulante', { ID });
  }
}
