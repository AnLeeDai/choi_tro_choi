// src/modules/auth/services/auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '../../user/services/user.service';
import { RegisterDto } from '../dtos/register.dto';
import { User } from '../../user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    return this.userService.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashedPassword,
      role: 'user',
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }
}
