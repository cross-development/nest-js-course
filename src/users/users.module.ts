// Core
import { Module } from '@nestjs/common';
// Packages
import { SequelizeModule } from '@nestjs/sequelize';
// Models
import { User } from './users.model';
// Services
import { UsersService } from './users.service';
// Controllers
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
