require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRouter = require("./routes/auth"); // Use the auth route for login

const app = express();

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cors()); // Allow all origins (modify as needed for production)

// Routes
app.use("/api/auth", userRouter); // Use the auth route for login

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => console.log(`Listening on port ${port}...`));
