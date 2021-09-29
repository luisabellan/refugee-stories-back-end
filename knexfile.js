module.exports = {
  /* development: {
    client: 'sqlite3',
    connection: { filename: './data/refugees.db3' },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: { 
      directory: './data/seeds' 
    },
  }, */
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: { directory: "../data/migrations" },
    seeds: { directory: "../data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
