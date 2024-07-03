const Subscription = require("../libraries/subscriptionLibrary");

let mySubscription = new Subscription();

const getAllSubscriptionsByUserId = (req, res) => {
  let userId = req.params.userId;
  let subscriptions = mySubscription.getAllSubscriptionsByUserId(userId);
  res.status(200);
  res.send({ res: subscriptions });
};

const createSubscription = (req, res) => {
  let userId = req.params.userId;
  let subscription = mySubscription.createSubscription(userId, req.body);
  res.status(200);
  res.send({ res: subscription });
};

const updateSubscription = (req, res) => {
  let subId = req.params.subId;
  let subscription = mySubscription.updateSubscription(subId, req.body);
  res.status(200);
  res.send({ res: subscription });
};

const deleteSubscription = (req, res) => {
  let subId = req.params.subId;
  let subscription = mySubscription.deleteSubscription(subId);
  res.status(200);
  res.send({ res: subscription });
};

const getAllSubscriptionCategories = (req, res) => {
  let userId = req.params.userId;
  let category = req.params.category;
  let categories = mySubscription.getAllSubscriptionCategories(
    userId,
    category
  );
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
