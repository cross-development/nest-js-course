// Core
import * as fs from 'fs';
import * as path from 'path';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Packages
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: { buffer: string | NodeJS.ArrayBufferView }): Promise<string> {
    try {
      const fileName = uuidV4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (error) {
      throw new HttpException('WRITE_FILE_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
