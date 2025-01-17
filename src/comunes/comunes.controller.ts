import { Controller, Get, Inject,Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import {PromocionesDto} from './dto/promociones.dto';
import {ParroquiasDto} from './dto/parroquias.dto';
import { ComunesService } from './comunes.service';

@Controller('comunes')
export class  ComunesController {
  constructor(private readonly comunesService: ComunesService) {}

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return "s";
  }

  
  @Get('combobox')
  combobox() {
    return this.comunesService.combobox();
  }

  @Post('promociones')
  promociones(@Payload() promocionesDto: PromocionesDto) {
    return this.comunesService.promociones(promocionesDto);
  }

  @Post('parroquias')
  parroquias(@Payload() parroquiasDto: ParroquiasDto) {
    return this.comunesService.parroquias(parroquiasDto);
  }
}
