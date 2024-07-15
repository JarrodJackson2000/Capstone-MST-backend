const Subscription = require("../libraries/subscriptionLibrary");

let mySubscription = new Subscription();

// Get all subscriptions by user id

const getAllSubscriptionsByUserId = async (req, res) => {
  let userId = req.params.userId;
  let subscriptions = await mySubscription.getAllSubscriptionsByUserId(userId);
  res.status(200);
  res.send({ subscriptions });
};

// Create subscription

const createSubscription = async (req, res) => {
  let userId = req.params.userId;
  let subscription = await mySubscription.createSubscription(userId, req.body);
  res.status(200);
  res.send({ res: subscription });
};

// Update subscription

const updateSubscription = async (req, res) => {
  let subId = req.params.subId;
  let subscription = await mySubscription.updateSubscription(subId, req.body);
  res.status(200);
  res.send({ res: subscription });
};

// Delete subscription

const deleteSubscription = async (req, res) => {
  let subId = req.params.subId;
  let subscription = await mySubscription.deleteSubscription(subId);
  res.status(200);
  res.send({ res: subscription });
};

// Get all subscription categories

const getAllSubscriptionCategories = async (req, res) => {
  let userId = req.params.userId;

  let categories = await mySubscription.getAllSubscriptionCategories(userId);
  res.status(200);
  res.send({ res: categories });
};

module.exports = {
  getAllSubscriptionsByUserId,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getAllSubscriptionCategories,
};
