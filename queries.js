const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
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
  createGuest(invite) {
    return database("guests")
      .insert(invite)
      .returning("*")
      .then(record => record[0]);
  },
  updateInvites(id, request) {
    return database("invite")
      .update(request)
      .where("id", id)
      .returning("*");
  },
  updateGuests(id, request) {
    return database("guests")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
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
