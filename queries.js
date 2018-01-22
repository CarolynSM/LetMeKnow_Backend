const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table);
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  create(invite) {
    return database("invite")
      .insert(invite)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, table) {
    return database(table)
      .update(table)
      .where("id", id)
      .returning("*")
      .then(record => [0]);
  },
  delete(id) {
    return database("invite")
      .where("id", id)
      .del();
    return database("guests")
      .where("guestOfId", id)
      .del();
  }
};
