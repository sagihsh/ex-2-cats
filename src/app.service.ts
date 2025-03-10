import { Injectable } from '@nestjs/common';
import { Cat } from './models/Cat';

@Injectable()
export class AppService {
  async getAllCats(): Promise<Cat[]> {
    return await Cat.findAll();
  }
}
