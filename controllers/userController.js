const User = require("../libraries/userLibrary");

let myUser = new User();

const getUserById = (req, res) => {
  let id = req.params.id;
  let user = myUser.getUserById(id);
  res.status(200);
  res.send({ result: user });
};

const updateUser = (req, res) => {
  let id = req.params.id;
  let user = myUser.updateUser(id);
  res.status(200);
  res.send({ result: user });
};

const createUser = (res) => {
  let user = myUser.createUser();
  res.status(200);
  res.send({ result: user });
};

module.exports = { getUserById, updateUser, createUser };
