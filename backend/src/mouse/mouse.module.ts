import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mouse } from './models/mouse.model';
import { MiceController } from './mouse.controller';
import { MiceService } from './mouse.service';

@Module({
  imports: [SequelizeModule.forFeature([Mouse])],
  providers: [MiceService],
  controllers: [MiceController],
})
export class MiceModule {}