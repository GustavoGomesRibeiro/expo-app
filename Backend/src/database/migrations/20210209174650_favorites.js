exports.up = function (knex) {
    return knex.schema.createTable("favorites", function (table) {
      table.increments("id");
  
      table.integer("user_id").notNullable();
      table.integer("company_id").notNullable();
      // table.boolean("isfavorite").notNullable();
  
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("company_id")
        .references("id")
        .inTable("company")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("favorites");
  };
  