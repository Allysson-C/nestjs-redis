import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async setHello() {
    await this.appService.setHello();
    return 'ok';
  }

  @Get()
  async getHello() {
    const result = await this.appService.getHello();
    console.log(result);
    return result;
  }
}
