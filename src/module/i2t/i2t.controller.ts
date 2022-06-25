import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import path = require('path');
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { I2TService } from './i2t.service';
import { Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
const { uuid } = require('uuidv4');

export const storage = {
  storage: diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      const filename: string = uuid();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};
@ApiTags('Image to Text')
@Controller('/i2t')
export class I2TController {
  constructor(private readonly i2tService: I2TService) {}

  @Get('/')
  async getAll() {
    return 'Hello World';
  }
  @Post('/convert')
  @UseInterceptors(FileInterceptor('file', storage))
  async uploadFile(@UploadedFile() file): Promise<Observable<Object>> {
    let result: any;
    result = await this.i2tService.convertImage2Text(file.path);
    result.uuid = file.filename.split('.')[0];
    result.datetime = new Date();
    return of(result);
  }
}
