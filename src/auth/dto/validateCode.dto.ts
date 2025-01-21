import { IsUppercase, IsNotEmpty, IsString } from 'class-validator';

export class ValidateCodeDto {
  @IsString()
  @IsNotEmpty()
  user_cod: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  @IsUppercase()
  tipo: string;
}
