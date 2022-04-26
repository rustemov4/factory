const { Pool } = require("pg")
const credentials = {
  user: "postgres",
  host: "localhost",
  database: "factory",
  password: "root",
  port: 5432,
};
const pool = new Pool(credentials)
exports.pool = pool