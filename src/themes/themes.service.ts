import { Inject, Injectable } from '@nestjs/common';
import { ThemeModel } from '../database/models/theme.model';
import { ModelClass, transaction } from 'objection';
import { NotesService } from '../notes/notes.service';

@Injectable()
export class ThemesService {
  constructor(private noteService: NotesService, @Inject('ThemeModel') private modelClass: ModelClass<ThemeModel>) {}

  findAll() {
    return this.modelClass.query();
  }

  findOne(id: number) {
    return this.modelClass.query().findById(id);
  }

  create(props: Partial<ThemeModel>) {
    return this.modelClass
      .query()
      .insert(props)
      .returning('*');
  }

  update(id: number, props: Partial<ThemeModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning('*')
      .first();
  }

  delete(id: number) {
    return transaction(this.modelClass, async (_, trx) => {
      await this.noteService.unsetTheme(id).transacting(trx);

      return this.modelClass
        .query()
        .delete()
        .where({ id })
        .returning('*')
        .first()
        .transacting(trx);
    });
  }
}
