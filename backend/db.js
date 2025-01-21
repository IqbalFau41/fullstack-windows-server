// db.js
const sql = require("mssql");
require("dotenv").config(); // Load environment variables from .env file

module.exports = async () => {
  const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // You can use 'localhost' if running locally
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
      encrypt: true, // Use this if you're on Azure
      trustServerCertificate: true, // Change to true for local dev / self-signed certs
    },
  };

  try {
    await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Error connecting to SQL Server:", error.message);
  }
};