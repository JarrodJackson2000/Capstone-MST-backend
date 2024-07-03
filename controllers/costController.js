const Cost = require("../libraries/costLibrary");

let myCost = new Cost();

const getAllCostsByUserId = (req, res) => {
  let id = req.params.id;
  let costs = myCost.getAllCostsByUserId(id);
  res.status(200);
  res.send({ costs });
};

const getAllCostsByCategory = (req, res) => {
  let id = req.params.id;
  let category = req.params.category;
  let costs = myCost.getAllCostsByCategory(id, category);
  res.status(200);
  res.send({ costs });
};

module.exports = { getAllCostsByUserId, getAllCostsByCategory };
