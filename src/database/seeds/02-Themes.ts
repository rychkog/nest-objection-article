import * as Knex from 'knex';
import { ThemeModel } from '../models/theme.model';

export async function seed(knex: Knex): Promise<any> {
  await ThemeModel.query(knex).insert([
    {
      name: 'Dark Purple',
      fontSize: 14,
      fontFamily: 'Code Saver',
      background: '#0b0b14',
      foreground: '#d4d4d4'
    },
    {
      name: 'One Dark',
      fontSize: 14,
      fontFamily: 'Code Saver',
      background: '#282c34',
      foreground: '#abb2bf'
    },
    {
      name: 'Dracula',
      fontSize: 14,
      fontFamily: 'Code Saver',
      background: '#282a36',
      foreground: '#f8f8f2'
    }
  ]);
}
