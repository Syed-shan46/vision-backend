// db.js
const { Pool } = require("pg");
require("dotenv").config();

// Create PostgreSQL connection pool
// const pool = new Pool({
//   user: process.env.DB_USER || "postgres",
//   host: process.env.DB_HOST || "localhost",
//   database: process.env.DB_NAME || "vision",
//   password: process.env.DB_PASSWORD || "syed123",
//   port: process.env.DB_PORT || 5432,
// });

const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL;

const pool = new Pool({
  connectionString,       // <- uses Render env variable
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false }                 // needed for cloud DB
    : false,
});

// Test DB connection once
pool.connect()
  .then(() => console.log("✅ PostgreSQL connected successfully!"))
  .catch(err => console.error("❌ Database connection error:", err.stack));

module.exports = pool;
