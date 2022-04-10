// Core
import { forwardRef, Module } from '@nestjs/common';
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
// Modules
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    forwardRef(() => AuthModule),
    RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
