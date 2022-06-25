import { Module } from '@nestjs/common';
import { I2TController } from './i2t.controller';
import { I2TService } from './i2t.service';

@Module({
  imports: [],
  controllers: [I2TController],
  providers: [I2TService],
})
export class I2TModule {}