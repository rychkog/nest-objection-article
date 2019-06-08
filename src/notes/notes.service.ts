import { Injectable } from '@nestjs/common';
import { NoteModel } from '../database/models/note.model';

@Injectable()
export class NotesService {
  findAll() {
    return null;
  }

  findOne(id: number) {
    return null;
  }

  create(props: Partial<NoteModel>) {
    return null;
  }

  update(id: number, props: Partial<NoteModel>) {
    return null;
  }

  delete(id: number) {
    return null;
  }

  unsetTheme(themeId: number) {
    return null;
  }

  async addTag(noteId: number, tagId: number) {
    return null;
  }

  async removeTag(noteId: number, tagId: number) {
    return null;
  }
}
