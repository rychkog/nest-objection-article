import { BaseModel } from './base.model';

export class TagModel extends BaseModel {
  static tableName = 'tags';

  name: string;
}
