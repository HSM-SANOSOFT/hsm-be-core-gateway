import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class ArchivoDto {
  @IsString()
  @IsNotEmpty()
  CEDULA: string;

  @IsString()
  @IsNotEmpty()
  PCN_NUMERO_HC: string;

  @IsString()
  @IsNotEmpty()
  APELLIDO_PATERNO: string;

  @IsString()
  @IsNotEmpty()
  APELLIDO_MATERNO: string;

  @IsString()
  @IsNotEmpty()
  PRIMER_NOMBRE: string;

  @IsString()
  @IsNotEmpty()
  SEGUNDO_NOMBRE: string;

  @IsString()
  @IsNotEmpty()
  SEXO: string;

  @IsString()
  @IsNotEmpty()
  FECHA_NACIMIENTO: string;

  @IsString()
  @IsNotEmpty()
  EDAD: string;

  @IsString()
  @IsNotEmpty()
  TELEFONO: string;

  @IsString()
  @IsNotEmpty()
  PRQ_CNT_PRV_CODIGO: string;

  @IsString()
  @IsNotEmpty()
  PRQ_CNT_CODIGO: string;

  @IsString()
  @IsNotEmpty()
  PRQ_CODIGO: string;

  @IsString()
  @IsNotEmpty()
  SERVICIO: string;

  @IsString()
  @IsNotEmpty()
  ESPECIALIDAD: string;

  @IsString()
  @IsNotEmpty()
  RESUMEN: string;

  @IsString()
  @IsNotEmpty()
  FECHA: string;

  @IsString()
  @IsNotEmpty()
  HORA: string;

  @IsString()
  @IsNotEmpty()
  NOMBRE_MED: string;

  @IsString()
  @IsNotEmpty()
  PRIMER_APELLID_MED: string;

  @IsString()
  @IsNotEmpty()
  SEGUNDO_APELLIDO_MED: string;

  @IsString()
  @IsNotEmpty()
  CD_PER: string;
}

export class Hcu053DocumentTemplateDto {
  @IsString()
  @IsNotEmpty()
  hallazgo: string;

  @IsString()
  @IsNotEmpty()
  diag: string;

  @IsString()
  @IsNotEmpty()
  cod_d: string;

  @IsString()
  @IsNotEmpty()
  pre: string;

  @IsString()
  @IsNotEmpty()
  def: string;

  @IsString()
  @IsNotEmpty()
  diag1: string;

  @IsString()
  @IsNotEmpty()
  cod_d1: string;

  @IsString()
  @IsNotEmpty()
  pre1: string;

  @IsString()
  @IsNotEmpty()
  def1: string;

  @IsString()
  @IsNotEmpty()
  diag2: string;

  @IsString()
  @IsNotEmpty()
  cod_d2: string;

  @IsString()
  @IsNotEmpty()
  pre2: string;

  @IsString()
  @IsNotEmpty()
  def2: string;

  @IsString()
  @IsNotEmpty()
  firma_referencia: string;

  @IsString()
  @IsNotEmpty()
  sello_referencia: string;

  @IsString()
  @IsNotEmpty()
  table_med_responsable: string;

  @ValidateNested()
  @Type(() => ArchivoDto)
  archivo: ArchivoDto;
}
