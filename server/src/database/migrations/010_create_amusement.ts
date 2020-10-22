import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable( 'amusements', table => {
    table.increments('id').primary(); //Exemplo
    table.string('name').notNullable();
    table.string("avatar");
    
    table.integer("type_id")
      .notNullable()
      .references('id')
      .inTable('types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.string("bio").notNullable();
    table.integer("cost").notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable("amusement");
}