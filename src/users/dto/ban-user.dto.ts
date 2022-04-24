// Packages
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User id' })
  @IsNumber({ allowNaN: false }, { message: 'MUST_BU_NUMBER' })
  readonly userId: number;

  @ApiProperty({ example: 'Some reason', description: 'Reason for blocking a user' })
  @IsString({ message: 'MUST_BU_STRING' })
  readonly banReason: string;
}
