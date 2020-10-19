
exports.up = function(knex) {
    return knex.schema.createTable('images', function(table){
        table.increments('id');
        table.string('path');
        table.integer('new_establishment_id');
        table.foreign('new_establishment_id').references('id').inTable('newEstablishments').onUpdate('CASCADE').onDelete('CASCADE');


        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    };

exports.down = function(knex) {
    return knex.schema.dropTable('images');
};
