const Cost = require("../libraries/costLibrary");

let myCost = new Cost();

// Get all costs by user id

const getAllCostsByUserId = async (req, res) => {
  let userId = req.params.userId;
  let costs = await myCost.getAllCostsByUserId(userId);
  res.status(200);
  res.send({ costs });
};

// Get all costs by category

const getAllCostsByCategory = async (req, res) => {
  let userId = req.params.userId;
  let category = req.params.category;
  let costs = await myCost.getAllCostsByCategory(userId, category);
  res.status(200);
  res.send({ costs });
};

module.exports = { getAllCostsByUserId, getAllCostsByCategory };
