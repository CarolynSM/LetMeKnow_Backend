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
  deleteInvite(id) {
    return database("invite")
      .where("id", id)
      .del();
  },
  deleteGuest(id) {
    return database("guests")
      .where("guestOfId", id)
      .del();
  }
};
