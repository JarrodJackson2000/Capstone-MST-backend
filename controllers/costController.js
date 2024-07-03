const Cost = require("../libraries/costLibrary");

let myCost = new Cost();

const getAllCostsByUserId = (req, res) => {
  let id = req.params.id;
  let costs = myCost.getAllCostsByUserId(id);
  res.status(200);
  res.send({ result: costs });
};

const getAllCostsByCategory = (req, res) => {
  let id = req.params.id;
  let category = req.params.category;
  let costs = myCost.getAllCostsByCategory(id, category);
  res.status(200);
  res.send({ result: costs });
};

const getCostById = (req, res) => {
  let id = req.params.id;
  let cost = myCost.getCostById(id);
  res.status(200);
  res.send({ result: cost });
};

module.exports = { getAllCostsByUserId, getAllCostsByCategory, getCostById };
