"use strict";
let Models = require("../models");

class Cost {
  constructor() {
    console.log("Cost class is created");
  }

  async getAllCostsByUserId(userId) {
    let result = await Models.Subscription.find({ userId: userId });
    let allCosts = [];
    result.forEach((sub) => {
      allCosts.push(sub.cost);
    });
    return allCosts;
  }

  async getAllCostsByCategory(userId, category) {
    let result = await Models.Cost.find({ userId: userId, category: category });
    let allCostsByCategory = [];
    result.forEach((sub) => {
      allCostsByCategoryCostsByCategory.push(sub.cost);
    });
    return allCostsByCategory;
  }
}

module.exports = Cost;
