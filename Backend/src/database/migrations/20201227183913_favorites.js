exports.up = function (knex) {
  return knex.schema.createTable("favorites", function (table) {
    table.increments("id");

    table.string("user_id").notNullable();
    table.string("establishment_id").notNullable();
    // table.boolean("isfavorite").notNullable();

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("establishment_id")
      .references("id")
      .inTable("establishments")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("favorites");
};
