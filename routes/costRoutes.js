let express = require("express");
let router = express.Router();
let costControllers = require("../controllers/costController");

//Get operation for finding all of a users subscription costs by user id
router.get("/:userId", (req, res) =>
  costControllers.getAllCostsByUserId(req, res)
);

//Get operation for finding all of a users subscription costs by id and indivual category
router.get("/:userId/:category", (req, res) =>
  costControllers.getAllCostsByCategory(req, res)
);

module.exports = router;
