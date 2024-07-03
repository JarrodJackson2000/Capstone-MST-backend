const UserClass = require("../libraries/userLibrary");

let myUser = new UserClass();

const getUserById = async (req, res) => {
  let userId = req.params.userId;
  let user = await myUser.getUserById(userId);
  res.status(200);
  res.send({ res: user });
};

const updateUser = (req, res) => {
  let userId = req.params.userId;
  let userData = req.body;
  let user = myUser.updateUser(userId, userData);
  res.status(200);
  res.send({ res: user });
};

const createUser = (req, res) => {
  let userData = req.body;
  let user = myUser.createUser(userData);
  res.status(200);
  res.send({ res: user });
};

module.exports = { getUserById, updateUser, createUser };
