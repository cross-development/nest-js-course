// Packages
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@example.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: 'qwe123qwe', description: 'User password' })
  readonly password: string;
}
