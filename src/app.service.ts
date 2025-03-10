import { Injectable } from '@nestjs/common';
import { Cat } from './types/Cat';

@Injectable()
export class AppService {
  async getAllCats(): Promise<Cat[]> {
    return await Cat.findAll();
  }
}
