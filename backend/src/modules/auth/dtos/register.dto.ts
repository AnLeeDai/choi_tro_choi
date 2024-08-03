// src/modules/auth/dtos/register.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

import { Match } from '../../../decorators/match.decorator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  @MinLength(4, { message: 'Username must be at least 4 characters long' })
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message: 'Username must not contain special characters',
  })
  readonly username: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  readonly password: string;

  @IsNotEmpty({ message: 'Confirm Password is required' })
  @IsString({ message: 'Confirm Password must be a string' })
  @MinLength(6, {
    message: 'Confirm Password must be at least 6 characters long',
  })
  @Match('password', { message: 'Confirm Password must match Password' })
  readonly confirmPassword: string;

  @IsNotEmpty({ message: 'Role is required' })
  @IsString({ message: 'Role must be a string' })
  readonly role: string;
}
