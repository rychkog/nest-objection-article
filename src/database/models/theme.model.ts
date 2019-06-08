import { BaseModel } from './base.model';

export class ThemeModel extends BaseModel {
  name: string;
  fontFamily: string;
  fontSize: number;
  background: string;
  foreground: string;
}
