// Core
import { Body, Controller, Get, Post } from '@nestjs/common';
// Packages
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// Models
import { User } from './users.model';
// Services
import { UsersService } from './users.service';
// Dto
import { CreateUserDto } from './dto/create-user.dto';

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
  @Get('/')
  getAll() {
    return this.usersService.getAllUsers();
  }
}
