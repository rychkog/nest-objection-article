import * as Knex from 'knex';

const tableName = 'themes';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.string('name').notNullable();

    t.text('font_family').defaultTo('monospace');
    t.integer('font_size').defaultTo(14);

    t.string('background').defaultTo('#000000');
    t.string('foreground').defaultTo('#ffffff');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
