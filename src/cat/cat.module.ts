import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './models/cat.model';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}