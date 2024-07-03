"use strict";
let Models = require("../models");

class UserClass {
  constructor() {
    console.log("User class is created");
  }

  async getUserById(userId) {
    console.log(userId);
    let result = await Models.User.findOne({ _id: userId });
    return result;
  }

  async updateUser(userId, userData) {
    console.log(userData);
    let result = await Models.User.updateOne({ _id: userId }, userData);
    return result;
  }

  async createUser(userData) {
    let result = await Models.User.create(userData);
    console.log(userData);
    return result;
  }
}

module.exports = UserClass;
