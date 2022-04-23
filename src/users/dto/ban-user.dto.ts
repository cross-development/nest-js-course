// Packages
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User id' })
  readonly userId: number;

  @ApiProperty({ example: 'Some reason', description: 'Reason for blocking a user' })
  readonly banReason: string;
}
