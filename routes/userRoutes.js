let express = require("express");
let router = express.Router();
let userControllers = require("../controllers/userController");

//Find user by email
router.get("/:userId", (req, res) => {
  userControllers.getUserById(req, res);
});

//Update user details
router.put("/:userId", (req, res) => userControllers.updateUser(req, res));

//Create new user
router.post("/", (req, res) => userControllers.createUser(req, res));

module.exports = router;
