const Cost = require("../libraries/costLibrary");

let myCost = new Cost();

const getAllCostsByUserId = async (req, res) => {
  let userId = req.params.userId;
  let costs = await myCost.getAllCostsByUserId(userId);
  res.status(200);
  res.send({ costs });
};

const getAllCostsByCategory = async (req, res) => {
  let userId = req.params.userId;
  let category = req.params.category;
  let costs = await myCost.getAllCostsByCategory(userId, category);
  res.status(200);
  res.send({ costs });
};

module.exports = { getAllCostsByUserId, getAllCostsByCategory };
