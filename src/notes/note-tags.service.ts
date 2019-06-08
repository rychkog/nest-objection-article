import { Injectable } from '@nestjs/common';
import { NoteTagModel } from '../database/models/note-tag.model';

@Injectable()
export class NoteTagsService {
  constructor() {
    return null;
  }

  create(props: Partial<NoteTagModel>) {
    return null;
  }

  async delete(props: Partial<NoteTagModel>) {
    return null;
  }

  deleteByNoteId(noteId: number) {
    return null;
  }

  deleteByTagId(tagId: number) {
    return null;
  }
}
