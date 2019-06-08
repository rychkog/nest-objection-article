import { BaseModel } from './base.model';

export class NoteModel extends BaseModel {
  text: string;
  themeId: number;
}
