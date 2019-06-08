import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemeModel } from '../database/models/theme.model';

@Controller('themes')
export class ThemesController {
  constructor(private themesService: ThemesService) {
  }

  @Get()
  async findAll() {
    return this.themesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.themesService.findOne(id);
  }

  @Post()
  async create(@Body() props: Partial<ThemeModel>) {
    return this.themesService.create(props);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.themesService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() props: Partial<ThemeModel>
  ) {
    return this.themesService.update(id, props);
  }
}
