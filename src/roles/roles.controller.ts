// Core
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// Packages
import { ApiTags } from '@nestjs/swagger';
// Services
import { RolesService } from './roles.service';
// Dto
import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post('/')
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
