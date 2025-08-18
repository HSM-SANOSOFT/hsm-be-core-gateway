import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class CondicionEdadDto {
  @IsBoolean()
  m1: boolean;

  @IsBoolean()
  d: boolean;

  @IsBoolean()
  m2: boolean;

  @IsBoolean()
  a: boolean;
}

class MotivoDto {
  @IsNumber()
  numero: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsBoolean()
  seleccionado: boolean;
}

class ResidenciaDto {
  @IsNumber()
  provincia: number;

  @IsNumber()
  canton: number;

  @IsNumber()
  parroquia: number;
}

class ARefDto {
  @IsString()
  institucion_sistema: string;

  @IsNumber()
  unicodigo: number;

  @IsString()
  establecimiento_salud: string;

  @IsString()
  numero_historia_clinica: string;

  @IsString()
  numero_archivo: string;

  @IsString()
  primer_apellido: string;

  @IsString()
  segundo_apellido: string;

  @IsString()
  primer_nombre: string;

  @IsString()
  segundo_nombre: string;

  @IsString()
  sexo: string;

  @IsString()
  fecha_nacimiento: string;

  @IsString()
  edad: string;

  @ValidateNested()
  @Type(() => CondicionEdadDto)
  condicion_edad: CondicionEdadDto;

  @IsString()
  telefono: string;

  @IsString()
  referencia: string;

  @IsString()
  derivacion: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MotivoDto)
  motivos: MotivoDto[];

  @ValidateNested()
  @Type(() => ResidenciaDto)
  residencia: ResidenciaDto;
}

class BRefDto {
  @IsString()
  institucion_sistema: string;

  @IsString()
  establecimiento_salud: string;

  @IsString()
  servicio: string;

  @IsString()
  especialidad: string;
}

class CRefDto {
  @IsString()
  resumen_clinico: string;
}

class DRefDto {
  @IsString()
  hallazgos: string;
}

class DiagnosticoDto {
  @IsNumber()
  id: number;

  @IsString()
  descripcion: string;

  @IsString()
  cie: string;

  @IsBoolean()
  pre: boolean;

  @IsBoolean()
  def: boolean;
}

class ERefDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiagnosticoDto)
  diagnosticos: DiagnosticoDto[];
}

class FRefDto {
  @IsString()
  fecha: string;

  @IsString()
  hora: string;

  @IsString()
  primer_nombre_med: string;

  @IsString()
  primer_apellido_med: string;

  @IsString()
  segundo_apellido_med: string;

  @IsString()
  documento_identificacion_med: string;

  @IsString()
  firma_med: string;

  @IsString()
  sello_med: string;
}

class JustificacionDto {
  @IsBoolean()
  si: boolean;

  @IsBoolean()
  no: boolean;
}

class GRefDto {
  @ValidateNested()
  @Type(() => JustificacionDto)
  referencia_justificada: JustificacionDto;

  @ValidateNested()
  @Type(() => JustificacionDto)
  derivacion_justificada: JustificacionDto;
}

class TipoDto {
  @IsBoolean()
  contrarreferencia: boolean;

  @IsBoolean()
  referencia_inversa: boolean;
}

class AContRefDto {
  @IsString()
  institucion_sistema: string;

  @IsString()
  unicodigo: string;

  @IsString()
  establecimiento_salud: string;

  @IsString()
  tipologia: string;

  @IsString()
  numero_historia_clinica: string;

  @IsString()
  numero_archivo: string;
}

class BContRefDto {
  @IsString()
  institucion_sistema: string;

  @IsString()
  establecimiento_salud: string;

  @IsString()
  distrito: string;

  @IsString()
  fecha: string;
}

class CContRefDto {
  @IsString()
  resumen_clinico: string;
}

class DContRefDto {
  @IsString()
  hallazgos: string;
}

class EContRefDto {
  @IsString()
  tratamientos: string;
}

class FContRefDiagnosticoDto {
  @IsString()
  id: string;

  @IsString()
  descripcion: string;

  @IsString()
  cie: string;

  @IsString()
  pre: string;

  @IsString()
  def: string;
}

class FContRefDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FContRefDiagnosticoDto)
  diagnosticos: FContRefDiagnosticoDto[];
}

class GContRefDto {
  @IsString()
  tratamiento_recomendado: string;
}

class HContRefDto {
  @IsString()
  fecha: string;

  @IsString()
  hora: string;

  @IsString()
  primer_nombre_med: string;

  @IsString()
  primer_apellido_med: string;

  @IsString()
  segundo_apellido_med: string;

  @IsString()
  documento_identificacion_med: string;

  @IsString()
  firma_med: string;

  @IsString()
  sello_med: string;
}

export class Hcu053DocumentTemplateDto {
  @ValidateNested()
  @Type(() => ARefDto)
  A_ref: ARefDto;

  @ValidateNested()
  @Type(() => BRefDto)
  B_ref: BRefDto;

  @ValidateNested()
  @Type(() => CRefDto)
  C_ref: CRefDto;

  @ValidateNested()
  @Type(() => DRefDto)
  D_ref: DRefDto;

  @ValidateNested()
  @Type(() => ERefDto)
  E_ref: ERefDto;

  @ValidateNested()
  @Type(() => FRefDto)
  F_ref: FRefDto;

  @ValidateNested()
  @Type(() => GRefDto)
  G_ref: GRefDto;

  @ValidateNested()
  @Type(() => TipoDto)
  tipo: TipoDto;

  @ValidateNested()
  @Type(() => AContRefDto)
  A_contref: AContRefDto;

  @ValidateNested()
  @Type(() => BContRefDto)
  B_contref: BContRefDto;

  @ValidateNested()
  @Type(() => CContRefDto)
  C_contref: CContRefDto;

  @ValidateNested()
  @Type(() => DContRefDto)
  D_contref: DContRefDto;

  @ValidateNested()
  @Type(() => EContRefDto)
  E_contref: EContRefDto;

  @ValidateNested()
  @Type(() => FContRefDto)
  F_contref: FContRefDto;

  @ValidateNested()
  @Type(() => GContRefDto)
  G_contref: GContRefDto;

  @ValidateNested()
  @Type(() => HContRefDto)
  H_contref: HContRefDto;
}
