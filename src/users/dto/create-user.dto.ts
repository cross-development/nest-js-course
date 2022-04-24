// Packages
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@example.com', description: 'User email' })
  @IsString({ message: 'MUST_BE_STRING' })
  @IsEmail({}, { message: 'INVALID_EMAIL' })
  readonly email: string;

  @ApiProperty({ example: 'qwe123qwe', description: 'User password' })
  @IsString({ message: 'MUST_BE_STRING' })
  @Length(4, 16, { message: 'INVALID_LENGTH' })
  readonly password: string;
}
