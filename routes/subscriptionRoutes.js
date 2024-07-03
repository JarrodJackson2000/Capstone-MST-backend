let express = require("express");
let router = express.Router();
let subscriptionControllers = require("../controllers/subscriptionController");

//Get operation for finding all of a users subscriptions
router.get("/:userId", (req, res) =>
  subscriptionControllers.getAllSubscriptionsByUserId(req, res)
);

//Post operation for creating new subscription entries for users
router.post(":userId", (req, res) =>
  subscriptionControllers.createSubscription(req, res)
);

//Put operation for updating a subscription entry
router.put(":subId", (req, res) =>
  subscriptionControllers.updateSubscription(req, res)
);

//Delete operation for removing a subscription entry
router.delete(":subId", (req, res) =>
  subscriptionControllers.deleteSubscription(req, res)
);

//Get operation for finding all of the users subscription categories
router.get(":userId/:category", (req, res) =>
  subscriptionControllers.getAllSubscriptionCategories(req, res)
);

module.exports = router;
