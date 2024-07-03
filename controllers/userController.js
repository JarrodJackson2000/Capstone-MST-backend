const User = require("../libraries/userLibrary");

let myUser = new User();

const getUserById = (req, res) => {
  let userId = req.params.userId;
  let user = myUser.getUserById(userId);
  res.status(200);
  res.send({ res: user });
};

const updateUser = (req, res) => {
  let userId = req.params.userId;
  let user = myUser.updateUser(userId, req.body);
  res.status(200);
  res.send({ res: user });
};

const createUser = (req, res) => {
  let user = myUser.createUser(req.body);
  res.status(200);
  res.send({ res: user });
};

module.exports = { getUserById, updateUser, createUser };
