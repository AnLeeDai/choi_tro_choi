// src/modules/user/user.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminSeed } from 'src/seeds/admin.seed';
import { UserSchema } from '../schema/user.schema';
import { UserService } from '../services/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService, AdminSeed],
  exports: [UserService],
})
export class UserModule implements OnModuleInit {
  constructor(private readonly adminSeed: AdminSeed) {}

  async onModuleInit() {
    await this.adminSeed.seedAdmin();
  }
}
