// Core
import { Injectable } from '@nestjs/common';
// Packages
import { InjectModel } from '@nestjs/sequelize';
// Models
import { Role } from './roles.model';
// Dto
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);

    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });

    return role;
  }
}
