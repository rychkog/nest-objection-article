import { BaseModel } from './base.model';

export class NoteTagModel extends BaseModel {
  static tableName = 'note_tags';

  noteId: number;
  tagId: number;
}
