let express = require("express");
let router = express.Router();
let costControllers = require("../controllers/costController");

//Get operation for finding all of a users subscription costs by user id
router.get("/:id", costControllers.getAllCostsByUserId(req, res));

//Get operation for finding all of a users subscription costs by id and indivual category
router.get("/:id/:category", costControllers.getAllCostsByCategory(req, res));

//Get operation for finding individual subscription cost by subscription id
router.get("/:id", costControllers.getCostById(req, res));

module.exports = router;
