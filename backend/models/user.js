const sql = require("mssql");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

// Function to generate JWT token
const generateAuthToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
};

// Function to validate user data for login
const validateLogin = (data) => {
  const schema = Joi.object({
    Nrp: Joi.string().required().label("Nrp"),
    email: Joi.string().required().email().label("Email"),
  });
  return schema.validate(data);
};

// Login function
const login = async (data) => {
  const { error } = validateLogin(data);
  if (error) {
    throw new Error(error.details[0].message);
  }

  const { Nrp, email } = data;

  try {
    const result =
      await sql.query`SELECT * FROM Users WHERE Nrp = ${Nrp} AND email = ${email}`;
    const user = result.recordset[0];

    if (!user) {
      throw new Error("User  not found");
    }

    const token = generateAuthToken(user.Id); // Assuming user.Id is the unique identifier
    return { token, user };
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};

// Export the login function
module.exports = {
  login,
  validateLogin,
  generateAuthToken,
};
