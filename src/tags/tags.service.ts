import { Injectable } from '@nestjs/common';
import { TagModel } from '../database/models/tag.model';

@Injectable()
export class TagsService {
  findAll() {
    return null;
  }

  findOne(id: number) {
    return null;
  }

  create(props: Partial<TagModel>) {
    return null;
  }

  update(id: number, props: Partial<TagModel>) {
    return null;
  }

  delete(id: number) {
    return null;
  }
}
