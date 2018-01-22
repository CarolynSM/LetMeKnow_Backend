exports.seed = function(knex, Promise) {
  return knex("invite")
    .del()
    .then(function() {
      return knex("invite").insert([
        {
          id: 1,
          name: "Brian",
          hasResponded: true,
          response: "attending",
          bringingGuest: true,
          numberAttending: 2
        },
        { id: 2, name: "Sarah", hasResponded: false, numberAttending: 0 },
        {
          id: 3,
          name: "James",
          hasResponded: true,
          response: "not attending",
          bringingGuest: false,
          numberAttending: 0
        },
        {
          id: 4,
          name: "BJ",
          hasResponded: true,
          response: "attending",
          bringingGuest: true,
          numberAttending: 2
        },
        { id: 5, name: "Emily", hasResponded: false, numberAttending: 0 },
        { id: 6, name: "Patrick", hasResponded: false, numberAttending: 0 },
        {
          id: 7,
          name: "Dan",
          hasResponded: true,
          response: "attending",
          bringingGuest: true,
          numberAttending: 2
        },
        { id: 8, name: "Ben", hasResponded: false, numberAttending: 0 },
        { id: 9, name: "Marlena", hasResponded: false, numberAttending: 0 },
        { id: 10, name: "Ross", hasResponded: false, numberAttending: 0 },
        { id: 11, name: "Malcom", hasResponded: false, numberAttending: 0 },
        { id: 12, name: "Amber", hasResponded: false, numberAttending: 0 }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE invite_id_seq RESTART WITH 13;");
    });
};
