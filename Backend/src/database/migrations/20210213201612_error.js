exports.up = function (knex) {
  return knex.schema.createTable("error", function (table) {
    table.increments("id");
    table.string("errorMessage");
    table.string("request");
    table.string("response");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("error");
};
