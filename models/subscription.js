const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Model for subscription collection

const subscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  category: { type: String, required: true },
  cost: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("subscription", subscriptionSchema);
