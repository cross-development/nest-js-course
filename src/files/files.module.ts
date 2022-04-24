// Core
import { Module } from '@nestjs/common';
// Services
import { FilesService } from './files.service';

@Module({
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
