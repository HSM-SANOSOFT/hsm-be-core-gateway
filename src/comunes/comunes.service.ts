import { HttpStatus,Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { DatabaseService } from './database/database.service';
import {PromocionesDto} from './dto/promociones.dto';
import {ParroquiasDto} from './dto/parroquias.dto';



@Injectable()
export class ComunesService {
  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  test() {
    return 'success';
  }

  async combobox(){
    let datos:any
    try {
      datos = await this.databaseService.getcombobox();
    } catch (error) {
        throw new RpcException({
          status: HttpStatus.BAD_REQUEST,
          message: error,
          keys: '',
        });
    }
    return datos;
  }


  async promociones(promocionesDto:PromocionesDto){
    const { filtro } = promocionesDto;
    let datos:any;
    let where = ''
    if(filtro.length > 0){
      where = `ESTADO_DE_DISPONIBILIDAD ='D' AND DESCRIPCION like '%${filtro}%' or CODIGO like '%${filtro}%'`
    }else{
      where = `ESTADO_DE_DISPONIBILIDAD ='D'`
    }
    try {
      datos = await this.databaseService.getpromociones(where);
    } catch (error) {
        throw new RpcException({
          status: HttpStatus.BAD_REQUEST,
          message: error,
          keys: '',
        });
    }
    return datos;
  }

  async parroquias(parroquiasDto:ParroquiasDto){
    const { filtro } = parroquiasDto;
    let datos:any;
    let where = ''
    if(filtro.length > 0){
      where = `PA.PARROQUIA like '%${filtro.toUpperCase()}%' AND ROWNUM < 50`
    }else{
      where = `ROWNUM < 50`
    }
    
    try {
      datos = await this.databaseService.getparroquias(where);
    } catch (error) {
        throw new RpcException({
          status: HttpStatus.BAD_REQUEST,
          message: error,
          keys: '',
        });
    }
    return datos;
  }
}
