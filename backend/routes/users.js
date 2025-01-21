// routes/users.js
const router = require("express").Router();
const { addUser , validateUser  } = require("../models/user");

router.post("/", async (req, res) => {
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