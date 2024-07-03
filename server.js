const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

app.use(express.json());

let userRoutes = require("./routes/userRoutes");
let subscriptionRoutes = require("./routes/subscriptionRoutes");
let costRoutes = require("./routes/costRoutes");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use("/api/user", userRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/cost", costRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port
  ${PORT}.`);
});
