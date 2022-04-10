// Core
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
// Packages
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// Models
import { User } from './users.model';
// Services
import { UsersService } from './users.service';
// Dto
import { CreateUserDto } from './dto/create-user.dto';
// Guards
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// Decorators
import { Roles } from 'src/auth/roles-auth.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/')
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get('/')
  getAll() {
    return this.usersService.getAllUsers();
  }
}
