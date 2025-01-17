import { IsNotEmpty, IsString } from 'class-validator';

export class EnvioCodeDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  codigo: number;
}
