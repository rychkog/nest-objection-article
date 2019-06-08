import { Global, Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NoteTagsService } from './note-tags.service';

@Global()
@Module({
  controllers: [NotesController],
  providers: [NotesService, NoteTagsService],
  exports: [NotesService, NoteTagsService],
})
export class NotesModule {
}
