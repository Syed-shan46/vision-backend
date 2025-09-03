// db.js
const { Pool } = require("pg");
require("dotenv").config();

// Create PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "vision",
  password: process.env.DB_PASSWORD || "syed123",
  port: process.env.DB_PORT || 5432,
});

// Test DB connection once
pool.connect()
  .then(() => console.log("✅ PostgreSQL connected successfully!"))
  .catch(err => console.error("❌ Database connection error:", err.stack));

module.exports = pool;
