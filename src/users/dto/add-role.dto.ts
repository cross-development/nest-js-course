// Packages
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'User id' })
  @IsNumber({ allowNaN: false }, { message: 'MUST_BU_NUMBER' })
  readonly userId: number;

  @ApiProperty({ example: 'admin', description: 'User role value' })
  @IsString({ message: 'MUST_BU_STRING' })
  readonly value: string;
}
