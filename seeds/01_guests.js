exports.seed = function(knex, Promise) {
  return knex("guests")
    .del()
    .then(function() {
      return knex("guests").insert([
        { id: 1, name: "Natalie", guestOf: "BJ" },
        { id: 2, name: "Zachary", guestOf: "Brian" },
        { id: 3, name: "Joanna", guestOf: "Dan" }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE guests_id_seq RESTART WITH 4;");
    });
};
