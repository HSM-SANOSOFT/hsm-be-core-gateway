import { HttpStatus,Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { DatabaseService } from './database/database.service';
import {PromocionesDto} from './dto/promociones.dto';
import {ParroquiasDto} from './dto/parroquias.dto';
import {ValidaCedulaDto} from './dto/validacedula.dto'


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

  async validarCedula(validacedulaDto: ValidaCedulaDto) {
    const { ci } = validacedulaDto;

    if (!/^\d{10}$/.test(ci)) {
      throw new RpcException({
        status: 404,
        message: 'La cedula ingresada debe de tener 10 numero',
      });

    }
  
    // Extraer los primeros dos dígitos y verificar que sean un código de provincia válido
    const provincia = parseInt(ci.substring(0, 2), 10);
    if ((provincia < 1 || provincia > 24) && provincia !== 30) {
      throw new RpcException({
        status: 404,
        message: 'Por favor, verifique el número de cédula ingresado, ya que no corresponde a ninguna provincia válida ni al código asignado para el extranjero.',
      });
    }
  
    const digitos = ci.split('').map(Number);
    const digitoVerificador = digitos[9];
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  
    let suma = 0;
    for (let i = 0; i < coeficientes.length; i++) {
      let producto = digitos[i] * coeficientes[i];
      if (producto >= 10) {
        producto -= 9;
      }
      suma += producto;
    }
  
    const residuo = suma % 10;
    const digitoCalculado = residuo === 0 ? 0 : 10 - residuo;

    let estado:any;
    let mensaje = '';

    if(digitoCalculado === digitoVerificador){
      estado = 201;
      mensaje = "Numero de Cedula correcto";
    }else{
      estado = 404;
      mensaje = "Numero de cedula incorrecto";
    }

    throw new RpcException({
      status: 404,
      message: mensaje
    });
  }

  
}
