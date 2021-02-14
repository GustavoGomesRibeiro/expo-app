exports.up = function (knex) {
  return knex.schema.createTable("images", function (table) {
    table.increments("id");
    table.string("path");
    table.string("images");
    table.string("url");

    table.integer("company_id");

    table
      .foreign("company_id")
      .references("id")
      .inTable("company")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
