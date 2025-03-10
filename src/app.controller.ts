import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './types/Cat';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/cats")
  async getAllCats(): Promise<Cat[]> {
    return await this.appService.getAllCats();
  }
}
