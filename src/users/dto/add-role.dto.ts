// Packages
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;

  @ApiProperty({ example: 'admin', description: 'User role value' })
  readonly value: string;
}
