import * as Knex from 'knex';
import { NoteModel } from '../models/note.model';

export async function seed(knex: Knex): Promise<any> {
  await NoteModel.query(knex).insert([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ex.',
      themeId: 1
    },
    {
      text:
        'Aperiam blanditiis distinctio earum et, inventore molestias nihil obcaecati officia quasi quo sed soluta suscipit.',
      themeId: 1
    },
    {
      text: 'Ab animi at consectetur error ex fugiat magni minima minus reiciendis sapiente?',
      themeId: 1
    },
    {
      text:
        'Ab beatae fuga fugiat harum iste iure quaerat quibusdam! Alias aliquid amet aut corporis dolores dolorum et eum ex,',
      themeId: 2
    },
    {
      text:
        'illum laboriosam maxime molestiae neque nesciunt numquam odio odit, quae repellendus tempora velit voluptas.',
      themeId: 2
    },
    {
      text:
        'A asperiores at commodi cumque deleniti, doloremque expedita explicabo facilis harum laudantium, magnam, nesciunt nihil perferendis quia ratione reprehenderit sit ut vel.',
      themeId: 3
    },
    {
      text:
        'Ab aspernatur autem commodi culpa dolore eos, facere minima molestiae odio odit perspiciatis porro qui quidem repudiandae similique tenetur totam velit.',
      themeId: 3
    },
    {
      text: 'Ab autem debitis dicta et illum minima molestiae non nostrum similique veniam.',
      themeId: 3
    }
  ]);
}
