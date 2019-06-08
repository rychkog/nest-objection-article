import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagModel } from '../database/models/tag.model';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {
  }

  @Get()
  async findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.tagsService.findOne(id);
  }

  @Post()
  async create(@Body() props: Partial<TagModel>) {
    return this.tagsService.create(props);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.tagsService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() props: Partial<TagModel>,
  ) {
    return this.tagsService.update(id, props);
  }
}
