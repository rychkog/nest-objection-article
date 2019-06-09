import { Inject, Injectable } from '@nestjs/common';
import { TagModel } from '../database/models/tag.model';
import { ModelClass, transaction } from 'objection';
import { NoteTagsService } from '../notes/note-tags.service';

@Injectable()
export class TagsService {
  constructor(private noteTagsService: NoteTagsService, @Inject('TagModel') private modelClass: ModelClass<TagModel>) {}

  findAll() {
    return this.modelClass.query();
  }

  findOne(id: number) {
    return this.modelClass.query().findById(id);
  }

  create(props: Partial<TagModel>) {
    return this.modelClass
      .query()
      .insert(props)
      .returning('*');
  }

  update(id: number, props: Partial<TagModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning('*')
      .first();
  }

  delete(id: number) {
    return transaction(this.modelClass, async (_, trx) => {
      await this.noteTagsService.deleteByTagId(id).transacting(trx);

      return this.modelClass
        .query()
        .deleteById(id)
        .returning('*')
        .first()
        .transacting(trx);
    });
  }
}
