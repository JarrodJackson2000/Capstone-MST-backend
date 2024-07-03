const Subscription = require("../libraries/subscriptionLibrary");

let mySubscription = new Subscription();

const getAllSubscriptionsById = (req, res) => {
  let id = req.params.id;
  let subscriptions = mySubscription.getAllSubscriptionsById(id);
  res.status(200);
  res.send({ result: subscriptions });
};

const createSubscription = (req, res) => {
  let id = req.params.id;
  let subscription = mySubscription.createSubscription(id);
  res.status(200);
  res.send({ result: subscription });
};

const updateSubscription = (req, res) => {
  let id = req.params.id;
  let subscription = mySubscription.updateSubscription(id);
  res.status(200);
  res.send({ result: subscription });
};

const deleteSubscription = (req, res) => {
  let id = req.params.id;
  let subscription = mySubscription.deleteSubscription(id);
  res.status(200);
  res.send({ result: subscription });
};

const getAllSubscriptionIds = (req, res) => {
  let id = req.params.id;
  let subscriptionIds = mySubscription.getAllSubscriptionIds(id);
  res.status(200);
  res.send({ result: subscriptionIds });
};

module.exports = {
  getAllSubscriptionsById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getAllSubscriptionIds,
};
