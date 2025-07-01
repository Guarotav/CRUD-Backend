require("dotenv").config();
const db = require("./database/db");  // Adjust path to where you export Sequelize instance

async function testConnection() {
  try {
    await db.authenticate();
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  } finally {
    await db.close(); // close connection cleanly
  }
}

testConnection();
