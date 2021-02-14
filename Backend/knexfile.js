// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./src/database/db.sqlite",
  //   },
  //   migrations: {
  //     directory: "./src/database/migrations",
  //   },
  //   useNullAsDefault: true,
  // },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
