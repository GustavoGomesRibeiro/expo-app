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
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      // host: "ec2-3-213-85-90.compute-1.amazonaws.com",
      // port: 5432,
      // database: "d65a1vi9if13hv",
      // user: process.env.HEROKU_POSTGRES_USERNAME,
      // password: process.env.HEROKU_POSTGRES_PASSWORD,
      url: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
  },
};
