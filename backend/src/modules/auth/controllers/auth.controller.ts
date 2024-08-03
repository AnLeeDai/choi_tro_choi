// src/modules/auth/controllers/auth.controller.ts
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { RegisterResponse } from '../interfaces/register-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDto: RegisterDto): Promise<RegisterResponse> {
    try {
      const existingUser = await this.authService.findByEmail(
        registerDto.email,
      );

      if (existingUser) {
        throw new ConflictException('Email already in use');
      }

      const newUser = await this.authService.register(registerDto);

      return {
        message: 'User registered successfully',
        data: newUser,
      };
    } catch (error) {
      if (error) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }
}
