import { EriConfig } from "./conf";

interface IKnexConfig {
  [key: string]: object;
}
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const config: IKnexConfig = {
  development: {
    client: "mysql",
    connection: {
      host: (process.env.DB_HOST as string) || "us-cdbr-east-06.cleardb.net",
      database: (process.env.DB_NAME as string) || "heroku_e78e2d2b6869c46",
      user: (process.env.DB_USER as string) || "b3d857e0a1e884",
      password: (process.env.DB_PASSWORD as string) || "7cd21039",
      port: "3306",
      charset: "utf8mb4",
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: function (connection: any, callback: any) {
        connection.query(`SET time_zone = '${timezone}'`, (err: any) => {
          callback(err, connection);
        });
      },
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "../database/migrations",
    },
    seeds: {
      directory: "../database/seeds",
    },
  },

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

export default config;
