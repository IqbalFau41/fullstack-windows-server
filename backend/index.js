require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRouter = require("./routes/auth");

const app = express();

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", userRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));