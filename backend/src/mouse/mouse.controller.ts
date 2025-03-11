import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMouseDto } from './dto/create-mouse.dto';
import { Mouse } from './models/mouse.model';
import { MiceService } from './mouse.service';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) {}

  @Post()
  create(@Body() createMouseDto: CreateMouseDto): Promise<Mouse> {
    return this.miceService.create(createMouseDto);
  }

  @Get()
  findAll(): Promise<Mouse[]> {
    return this.miceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Mouse> {
    return this.miceService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.miceService.remove(id);
  }
}