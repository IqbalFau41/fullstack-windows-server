const router = require("express").Router();
const { 
  findUser_ByNameAndEmail, 
  validateLogin, 
  generateAuthToken, 
  addUser , 
  validateUser  
} = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    // Validate the login data
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    // Find the user by first name and email
    const user = await findUser_ByNameAndEmail(req.body.firstName, req.body.email);
    console.log("User  found:", user); // Log the user object for debugging

    // Check if user exists
    if (!user) return res.status(401).send({ message: "Invalid first name or email" });

    // Generate a token for the user
    const token = generateAuthToken(user.email);
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    console.error("Error during login:", error); // Log the error for debugging
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { error } = validateUser (req.body); // Validate user data
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await addUser (req.body); // Call addUser  to add the user
    res.status(201).send({ message: "User  created successfully", user });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router; // Ensure you are exporting the router