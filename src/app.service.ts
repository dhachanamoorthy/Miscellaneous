import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHealthCheck(): any {
    const response = {
      message: 'Health Check',
      status: 'OK',
      uptime: `${process.uptime().toFixed(0)} seconds`,
      nodeVersion: process.versions.node,
      time: new Date().toISOString(),
    };
   
    return response;
  }
}
