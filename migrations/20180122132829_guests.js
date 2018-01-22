exports.up = function(knex, Promise) {
  return knex.schema.createTable("guests", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.text("guestOf").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("guests");
};
