import * as Knex from 'knex';

const tableName = 'tags';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.string('name')
      .notNullable()
      .unique();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
