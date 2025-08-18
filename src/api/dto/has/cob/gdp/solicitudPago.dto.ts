import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

// Información de la factura
class InfoFacturaDTO {
  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  document_type: '04' | '05' | '06' | '08'; // RUC|Cédula ecuatoriana|Pasaporte|Identificación del exterior

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  phones: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  type: 'Individual' | 'Company'; // Persona natural o Empresa

  @IsNotEmpty()
  @IsString()
  description: string;
}

// Valores de la factura
class ValoresDTO {
  @IsNotEmpty()
  @IsNumber()
  amount_with_tax: number;

  @IsNotEmpty()
  @IsNumber()
  amount_without_tax: number;
}

// Detalle del servicio o producto
class DetalleDTO {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsString()
  compania: 'SAS' | 'CSI' | 'TEST';

  @IsNotEmpty()
  @IsObject()
  data: Record<string, unknown>;
}

class configuracionDTO {
  @IsOptional()
  @IsString()
  notify_url: string;
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
  @Type()
  detalle: DetalleDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => configuracionDTO)
  configuracion: configuracionDTO;
}
