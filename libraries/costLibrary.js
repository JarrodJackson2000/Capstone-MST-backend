"use strict";
let Models = require("../models");

class Cost {
  constructor() {
    console.log("Cost class is created");
  }

  async getAllCostsByUserId(userId) {
    let result = await Models.Subscription.find({ userId: userId });
    let totalCost = 0;
    result.forEach((sub) => {
      totalCost = totalCost + sub.cost;
    });
    return totalCost;
  }

  async getAllCostsByCategory(userId, category) {
    let result = await Models.Subscription.find({
      userId: userId,
      category: category,
    }).then((result) => {
      let allCosts = 0;
      result.forEach((sub) => {
        allCosts = allCosts + sub.cost;
      });
      return allCosts;
    });
    return result;
  }
}

module.exports = Cost;
