const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const costRoutes = require("./routes/costRoutes");

let dbConnect = require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use("/user", userRoutes);
app.use("/subscription", subscriptionRoutes);
app.use("/cost", costRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port
  ${PORT}.`);
});
