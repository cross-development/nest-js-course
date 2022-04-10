// Core
import { forwardRef, Module } from '@nestjs/common';
// Packages
import { JwtModule } from '@nestjs/jwt';
// Services
import { AuthService } from './auth.service';
// Controllers
import { AuthController } from './auth.controller';
// Modules
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'secret',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
