import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { I2TModule } from './module/i2t/i2t.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env"],
    }),
    I2TModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
