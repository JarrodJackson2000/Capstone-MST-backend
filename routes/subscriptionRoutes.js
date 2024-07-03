let express = require("express");
let router = express.Router();
let subscriptionControllers = require("../controllers/subscriptionController");

//Get operation for finding all of a users subscriptions
router.get("/:id", subscriptionControllers.getAllSubscriptionsById(req, res));

//Post operation for creating new subscription entries for users
router.post(":id", subscriptionControllers.createSubscription(req, res));

//Put operation for updating a subscription entry
router.put(":id", subscriptionControllers.updateSubscription(req, res));

//Delete operation for removing a subscription entry
router.delete(":id", subscriptionControllers.deleteSubscription(req, res));

//Get operation for finding a collection of all subscription ids for a user
router.get(":id", subscriptionControllers.getAllSubscriptionIds(req, res));

module.exports = router;
