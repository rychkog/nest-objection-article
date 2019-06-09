import * as Knex from 'knex';
import { NoteTagModel } from '../models/note-tag.model';

export async function seed(knex: Knex): Promise<any> {
  await NoteTagModel.query(knex).insert([
    {
      noteId: 1,
      tagId: 1
    },
    {
      noteId: 1,
      tagId: 2
    },
    {
      noteId: 1,
      tagId: 3
    },
    {
      noteId: 1,
      tagId: 4
    },
    {
      noteId: 1,
      tagId: 5
    },
    {
      noteId: 2,
      tagId: 1
    },
    {
      noteId: 3,
      tagId: 1
    },
    {
      noteId: 4,
      tagId: 2
    },
    {
      noteId: 5,
      tagId: 3
    },
    {
      noteId: 6,
      tagId: 5
    },
    {
      noteId: 7,
      tagId: 3
    }
  ]);
}
