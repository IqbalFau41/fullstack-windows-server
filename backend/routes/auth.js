const router = require("express").Router();
const { login } = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    const { token, user } = await login(req.body); // Call the login function
    res.status(200).send({ token, message: "Logged in successfully", user });
  } catch (error) {
    console.error("Error during login:", error);
    if (error.message === "User  not found") {
      return res.status(401).send({ message: "Invalid Nrp or email" });
    }
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router; // Ensure you are exporting the router
