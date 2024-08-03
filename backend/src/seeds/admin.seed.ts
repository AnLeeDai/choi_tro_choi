// src/seeds/admin.seed.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '../modules/user/services/user.service';

@Injectable()
export class AdminSeed {
  constructor(private readonly userService: UserService) {}

  async seedAdmin() {
    const adminEmail = 'admin@choitrochoi.com';
    const existingAdmin = await this.userService.findByEmail(adminEmail);
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('adminpassword', 10);
      await this.userService.create({
        username: 'admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
      });
      console.log('Admin user created account with email:' + adminEmail);
    }
  }
}
