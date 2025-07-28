import { IsNotEmpty, IsString } from 'class-validator';

export class FacturasTypeDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
