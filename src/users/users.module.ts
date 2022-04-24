// Core
import { forwardRef, Module } from '@nestjs/common';
// Packages
import { SequelizeModule } from '@nestjs/sequelize';
// Models
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
// Services
import { UsersService } from './users.service';
// Controllers
import { UsersController } from './users.controller';
// Modules
import { Post } from '../posts/posts.model';
import { AuthModule } from '../auth/auth.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    forwardRef(() => AuthModule),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
