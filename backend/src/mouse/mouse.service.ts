import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMouseDto } from './dto/create-mouse.dto';
import { Mouse } from './models/mouse.model';
import { Cat } from 'src/cat/models/cat.model';

@Injectable()
export class MiceService {
  constructor(
    @InjectModel(Mouse)
    private readonly catModel: typeof Mouse,
  ) {}

  create(createMouseDto: CreateMouseDto): Promise<Mouse> {
    return this.catModel.create({
      ...createMouseDto
    });
  }

  async findAll(): Promise<Mouse[]> {
    return this.catModel.findAll({ include: Cat });
  }

  async findOne(id: string): Promise<Mouse> {
    const cat = await this.catModel.findOne({
      where: {
        id,
      },
      include: Cat,
    });

    if (cat == null) {
        throw new Error(`Mouse with id: ${id} doesn't exist`);
    }
    
    return cat;
  }

  async remove(id: string): Promise<void> {
    const cat = await this.findOne(id);
    await cat.destroy();
  }
}