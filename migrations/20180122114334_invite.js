exports.up = function(knex, Promise) {
  return knex.schema.createTable("invite", table => {
    table.increments("id").primary();
    table.text("name").notNullable();
    table.boolean("hasResponded").notNullable();
    table.text("response").nullable();
    table.boolean("bringingGuest").nullable();
    table.integer("numberAttending").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("invite");
};
