// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/module/user.module';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
