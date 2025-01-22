import { IsString, IsOptional, IsNumber, IsDate, IsEmail, IsIn, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class RegistroPacientesDto {

  @IsString()
  @MaxLength(4)
  prs_codigo: string;

  @IsString()
  @MaxLength(3)
  tipo_identificacion: string;

  @IsString()
  @MaxLength(20)
  cedula?: string;

  /*@IsString()
  @MaxLength(3)
  admitido_por?: string;

  @IsString()
  @MaxLength(3)
  tipo_paciente?: string;

  @IsString()
  @MaxLength(2)
  plan_social?: string;

  @IsString()
  @MaxLength(2)
  sexo_pacientes?: string;

  @IsString()
  @MaxLength(3)
  estado_civil: string;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  tipo_sangre: string;

  @IsString()
  @MaxLength(15)
  fecha_nacimiento: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  instruccion?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @MaxLength(32)
  telefono?: string;

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
  @IsOptional()
  @MaxLength(240)
  direccion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  nacionalidad?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  lugar_nacimiento?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  grupo_cultural?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1)
  zona?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  barrio?: string;

  @IsString()
  @MaxLength(2)
  prq_cnt_prv_codigo_ncm?: string;//provincia

  @IsString()
  @MaxLength(2)
  prq_cnt_codigo_ncm?: string;//cantón

  @IsString()
  @MaxLength(2)
  prq_codigo_ncm?: string;//parroquia

  @IsString()
  @IsOptional()
  @MaxLength(2)
  ocp_codigo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(13)
  ruc_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  empresa_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(32)
  telefono_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(240)
  direccion_trabajo?: string;


  @IsString()
  @IsOptional()
  @MaxLength(240)
  cargo_trabajo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  num_afiliado_iess?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  fec_afiliado_iess?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  seguro?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  alerta?: string;

  @IsString()
  @IsOptional()
  @MaxLength(250)
  observacion?: string;

  @IsString()
  @IsOptional()
  @MaxLength(4)
  tipo_seguro?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2)
  tipo_beneficiario?: string;

  @IsString()
  @IsOptional()
  @MaxLength(5)
  parentesco?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  id_afiliado?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  nombre_afiliado?: string;

  @IsString()
  @IsIn(['F', 'T'])
  bloqueado: string;

  @IsString()
  @MaxLength(3)
  clasificacion_onc: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  id_conadis?: string;

  @IsNumber()
  @IsOptional()
  numero_hc_anterior?: number;

  @IsString()
  @IsIn(['F', 'V'])
  datos_verificados: string;*/
}
