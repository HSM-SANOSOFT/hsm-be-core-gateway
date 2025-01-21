import { IsNotEmpty, IsString, IsUppercase } from 'class-validator';

export class ValidateCodeDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  code: string;
}

