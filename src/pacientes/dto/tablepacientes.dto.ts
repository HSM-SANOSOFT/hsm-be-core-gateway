import { IsString, IsOptional, IsNumber, IsDate, IsEmail, IsIn, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class TablePacientesDto {
  @IsNumber()
  numero_hc: number;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_cnt_codigo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_cnt_prv_codigo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_codigo?: string;

  @IsString()
  @MaxLength(30)
  apellido_paterno: string;

  @IsString()
  @MaxLength(30)
  primer_nombre: string;

  @IsString()
  @IsIn(['M', 'F'])
  sexo: string;

  @IsString()
  @MaxLength(3)
  estado_civil: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  clasificacion: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  apellido_materno?: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  segundo_nombre?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  cedula?: string;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  grupo_sanguineo?: string;

  @IsString()
  @IsOptional()
  fecha_nacimiento?: string;

  @IsNumber()
  @IsOptional()
  numero_afiliacion_iess?: number;

  @IsString()
  @IsOptional()
  @MaxLength(240)
  direccion_domicilio?: string;

  @IsString()
  @IsOptional()
  @MaxLength(32)
  telefono?: string;

  @IsOptional()
  @IsString()
  fecha_afiliacion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  instruccion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  ocp_codigo?: string;

  @IsString()
  @IsIn(['F', 'T'])
  bloqueado: string;

  @IsDate()
  @IsOptional()
  fecha_termino?: Date;

  @IsNumber()
  @IsOptional()
  maximo_cupo?: number;

  @IsNumber()
  @IsOptional()
  dias_maximo_pago?: number;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  tipo_paciente: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsIn(['F', 'T'])
  asegurado: string;

  @IsNumber()
  @IsOptional()
  pcn_numero_hc?: number;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  informacion_a_recibir?: string;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  tipo_identificacion: string;

  @IsNumber()
  @IsOptional()
  saldo_actual?: number;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  sub_clasificacion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  alerta?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  barrio?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  zona?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  lugar_nacimiento?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  nacionalidad?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  grupo_cultural?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  empresa_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  tipo_seguro?: string;

  @IsString()
  @IsIn(['F', 'V'])
  datos_verificados: string;

  @IsString()
  @IsOptional()
  @MaxLength(250)
  observacion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(240)
  direccion_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(32)
  telefono_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(240)
  cargo_trabajo?: string;

  @IsString()
  @MaxLength(4)
  prs_codigo: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  inst_codigo?: string;

  @IsString()
  @MaxLength(3)
  clasificacion_onc: string;

  @IsNumber()
  @IsOptional()
  numero_hc_anterior?: number;

  @IsNumber()
  @IsOptional()
  tipo_paciente_anterior?: number;

  @IsNumber()
  @IsOptional()
  institucion_rep?: number;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_cnt_prv_codigo_ncm?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_cnt_codigo_ncm?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  prq_codigo_ncm?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  dpr_ara_codigo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  dpr_codigo?: string;

  @IsString()
  @IsIn(['V', 'F'])
  @IsOptional()
  tratamiento_activo: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  id_conadis?: string;

  @IsString()
  @IsIn(['F', 'T'])
  @IsOptional()
  tiene_transferencia: string;

  @IsString()
  @IsIn(['F', 'T'])
  @IsOptional()
  tiene_certif_de_votacion: string;

  @IsString()
  @IsIn(['F', 'T'])
  @IsOptional()
  tiene_cedula: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  situacion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  id_issfa?: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  tipo_discapacidad?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  epidemiologico?: string;

  @IsString()
  @IsOptional()
  @MaxLength(13)
  ruc_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  hc_isspol?: string;

  @IsOptional()
  firma_dig?: string;

  @IsString()
  @IsIn(['H', 'O', 'B', 'A'])
  @IsOptional()
  orientacion_sexual: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  identidad_genero?: string;

  @IsNumber()
  @IsOptional()
  porc_discapacididad?: number;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  cedula_mama?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  nombre_mama?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  cedula_papa?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  nombre_papa?: string;

  @IsString()
  @IsIn(['A', 'B', 'C'])
  @IsOptional()
  forma_admision: string;

  @IsOptional()
  cedula_imagen?: string;

  @IsString()
  @IsIn(['N', 'Y'])
  @IsOptional()
  vigencia_cedula: string;

  @IsDate()
  @IsOptional()
  fecha_exp_ci?: Date;

  @IsNumber()
  @IsOptional()
  peso?: number;

  @IsNumber()
  @IsOptional()
  talla?: number;
}
