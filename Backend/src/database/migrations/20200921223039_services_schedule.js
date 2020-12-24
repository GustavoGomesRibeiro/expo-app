
exports.up = function(knex) {
    return knex.schema.createTable('services_schedule', function(table){
        table.increments('id');
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        table.string('establishment_id').notNullable();

        table.foreign('establishment_id').references('id').inTable('establishments').onUpdate('CASCADE').onDelete('CASCADE');
          
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    };
  
exports.down = function(knex) {
    return knex.schema.dropTable('services_schedule');
};
