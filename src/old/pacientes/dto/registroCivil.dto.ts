import { IsNotEmpty, IsNumberString } from 'class-validator';

export class RegistroCivilDto {
  @IsNumberString()
  @IsNotEmpty()
  ci: string;
}
