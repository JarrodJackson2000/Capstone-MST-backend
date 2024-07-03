"use strict";
let Models = require("../models");

class User {
  constructor() {
    console.log("User Library Initialized");
  }

  getUserById(id, res) {
    Models.User.findOne({ where: { id: id } })
      .then((user) => res.send({ result: 200, user: user }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  updateUser(id, req, res) {
    Models.User.findByIdAndUpdate(id, req.body)
      .then((user) => res.send({ result: 200, user: user }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }

  createUser(req, res) {
    Models.User.create(req.body)
      .then((user) => res.send({ result: 200, user: user }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  }
}
