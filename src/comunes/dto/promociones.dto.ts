import { IsNotEmpty, IsString } from 'class-validator';

export class PromocionesDto {
  @IsString()
  filtro: string;
}
