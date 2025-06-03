import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './models/cat.model';
import { Mouse } from 'src/mouse/models/mouse.model';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private readonly catModel: typeof Cat,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const { mice, ...catData } = createCatDto;
    
    const cat = await this.catModel.create(catData);

    if (mice?.length) {
      const newMice = await Mouse.bulkCreate(mice.map((mouse) => ({
        ...mouse,
        catId: cat.id,
      })));
      
      cat.mice = newMice;
    }
    
    return cat;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll({ include: Mouse });
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catModel.findOne({
      where: {
        id,
      },
      include: Mouse
    });

    if (cat == null) {
        throw new Error(`Cat with id: ${id} doesn't exist`);
    }
    
    return cat;
  }

  async remove(id: string): Promise<void> {
    const cat = await this.findOne(id);
    await cat?.destroy();
  }
}