"use strict";

let Models = require("../models");

class Subscription {
  constructor() {
    console.log("Subscription class is created");
  }

  async getAllSubscriptionsByUserId(userId) {
    let result = await Models.Subscription.find({ userId: userId });
    return result;
  }

  async createSubscription(userId, subscriptionData) {
    subscriptionData.userId = userId;
    let result = await Models.Subscription.create(subscriptionData);
    return result;
  }

  async updateSubscription(subId, subscriptionData) {
    let result = await Models.Subscription.updateOne(
      { _id: subId },
      subscriptionData
    );
    return result;
  }

  async deleteSubscription(subId) {
    let result = await Models.Subscription.deleteOne({ _id: subId });
    return result;
  }

  async getAllSubscriptionCategories(userId) {
    let result = await Models.Subscription.find({ userId: userId });
    let categories = [];
    result.forEach((sub) => {
      if (!categories.includes(sub.category)) {
        categories.push(sub.category);
      }
    });
    return categories;
  }
}

module.exports = Subscription;
