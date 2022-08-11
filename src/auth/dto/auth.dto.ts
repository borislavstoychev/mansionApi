import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(12)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
