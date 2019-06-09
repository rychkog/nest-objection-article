import * as Knex from 'knex';

const tableName = 'note_tags';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.integer('tag_id')
      .references('id')
      .inTable('tags');

    t.integer('note_id')
      .references('id')
      .inTable('notes');

    t.unique(['tag_id', 'note_id']);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
