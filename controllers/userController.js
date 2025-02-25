const UserClass = require("../libraries/userLibrary");

let myUser = new UserClass();

// Get user by email or id

const getUserByUserEmailOrId = async (req, res) => {
  let userValue = req.params.userValue;
  let type = req.query.type;
  let user = await myUser.getUserByUserEmailOrId(userValue, type);
  res.status(200);
  res.send({ res: user });
};

// Update user

const updateUser = (req, res) => {
  let userId = req.params.userId;
  let userData = req.body;
  let user = myUser.updateUser(userId, userData);
  res.status(200);
  res.send({ res: user });
};

// Create user

const createUser = (req, res) => {
  let userData = req.body;
  let user = myUser.createUser(userData);
  res.status(200);
  res.send({ res: user });
};

module.exports = { getUserByUserEmailOrId, updateUser, createUser };
