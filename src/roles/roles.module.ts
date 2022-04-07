// Core
import { Module } from '@nestjs/common';
// Packages
import { SequelizeModule } from '@nestjs/sequelize';
// Models
import { Role } from './roles.model';
// Services
import { RolesService } from './roles.service';
// Controllers
import { RolesController } from './roles.controller';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role])],
})
export class RolesModule {}
