import { IsNotEmpty, IsString } from 'class-validator';

export class PasswordChangeDto {
  @IsString()
  @IsNotEmpty()
  username: string;
}
