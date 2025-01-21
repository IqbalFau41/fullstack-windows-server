const sql = require("mssql");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcryptjs");

// Function to generate JWT token
const generateAuthToken = (userId) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
  return token;
};

// Function to add a user to the database
const addUser  = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password
    const result = await sql.query`INSERT INTO Users (firstName, lastName, email, password) VALUES (${userData.firstName}, ${userData.lastName}, ${userData.email}, ${hashedPassword})`;
    return { id: result.rowsAffected[0], token: generateAuthToken(userData.email) };
  } catch (error) {
    console.error("Error adding user:", error.message);
    throw error;
  }
};

// Function to validate user data for registration
const validateUser  = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().required().email().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

// Function to find a user by email
const findUser_ByEmail = async (email) => {
  try {
    const result = await sql.query`SELECT * FROM Users WHERE email = ${email}`;
    return result.recordset[0]; // Return the first user found
  } catch (error) {
    console.error("Error finding user:", error.message);
    throw error;
  }
};

// Function to find a user by first name and email
const findUser_ByNameAndEmail = async (firstName, email) => {
  try {
    const result = await sql.query`SELECT * FROM Users WHERE firstName = ${firstName} AND email = ${email}`;
    return result.recordset[0]; // Return the first user found
  } catch (error) {
    console.error("Error finding user:", error.message);
    throw error;
  }
};

// Function to compare passwords
const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// Function to validate user data for login
const validateLogin = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    email: Joi.string().required().email().label("Email"),
  });
  return schema.validate(data);
};

// Export the functions
module.exports = { 
  addUser , 
  validateUser , 
  findUser_ByEmail, 
  findUser_ByNameAndEmail, 
  generateAuthToken, 
  comparePasswords, 
  validateLogin 
};