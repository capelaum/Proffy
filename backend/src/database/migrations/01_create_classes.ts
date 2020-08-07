import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // Chave Estrangeira - alterações ou delete modo cascata!
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// Volta as alterações caso der ruim
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}