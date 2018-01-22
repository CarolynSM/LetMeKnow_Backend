module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///letmeknow"
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
