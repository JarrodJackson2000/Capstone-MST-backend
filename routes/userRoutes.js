let express = require("express");
let router = express.Router();
let userControllers = require("../controllers/userController");

//Find user by id
router.get("api/user/:id", userControllers.getUserById(req, res));

//Update user details
router.put("api/user/:id", userControllers.updateUser(req, res));

//Create new user
router.post("api/user/", userControllers.createUser(req, res));

module.exports = router;
