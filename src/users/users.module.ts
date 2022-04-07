// Core
import { Module } from '@nestjs/common';
// Packages
import { SequelizeModule } from '@nestjs/sequelize';
// Models
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
// Services
import { UsersService } from './users.service';
// Controllers
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
})
export class UsersModule {}
