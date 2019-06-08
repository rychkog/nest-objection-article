import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { NoteModel } from '../database/models/note.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(
    private notesService: NotesService
  ) {
  }

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const note = await this.notesService.findOne(id);
    return note;
  }

  @Post()
  async create(@Body() props: Partial<NoteModel>) {
    return this.notesService.create(props);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.notesService.delete(id);
  }

  @Put(':id')
  async edit(@Param('id', new ParseIntPipe()) id: number, @Body('text') text: string) {
    const note = await this.notesService.update(id, { text });
    return note;
  }

  @Put(':id/tags/:tagId')
  async addTag(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('tagId', new ParseIntPipe()) tagId: number,
  ) {
    const note = await this.notesService.addTag(id, tagId);
    return note;
  }

  @Delete(':id/tags/:tagId')
  async removeTag(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('tagId', new ParseIntPipe()) tagId: number,
  ) {
    const note = await this.notesService.removeTag(id, tagId);
    return note;
  }

  @Put(':id/theme/:themeId')
  async setTheme(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('themeId', new ParseIntPipe()) themeId: number,
  ) {
    const note = await this.notesService.update(id, { themeId });
    return note;
  }
}
