import pg from "pg";

const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect()
  .then(() => {
    console.log("\x1b[42m", "Database connected", "\x1b[40m");
  })
  .catch((err) => {
    console.log("\x1b[41m", `Databased failed to connect.`, "\x1b[0m");

    console.log("\x1b[43m", `ERROR: ${err.message}`, "\x1b[40m");
  });

export default db;
