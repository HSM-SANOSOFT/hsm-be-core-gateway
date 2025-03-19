import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

// Información de la factura
export class InfoFacturaDTO {
  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  document_type:
    | '04' // RUC
    | '05' // Cédula ecuatoriana
    | '06' // Pasaporte
    | '08'; // Identificación del exterior

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  type: 'Individual' | 'Company'; // Persona natural o Empresa
}

// Valores de la factura
export class ValoresDTO {
  @IsNotEmpty()
  @IsNumber()
  amount_without_tax: number;

  @IsNotEmpty()
  @IsNumber()
  tax_value: number;
}

// Detalle del servicio o producto
export class DetalleDTO {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsObject()
  data: Record<string, unknown>;
}

// DTO principal que agrupa todo
export class SolicitudPagoDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InfoFacturaDTO)
  infoFactura: InfoFacturaDTO;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ValoresDTO)
  valores: ValoresDTO;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DetalleDTO)
  detalle: DetalleDTO;
}
