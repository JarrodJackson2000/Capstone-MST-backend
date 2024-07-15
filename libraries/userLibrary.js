"use strict";
let Models = require("../models");
const { ObjectId } = require("mongoose").Types;

class UserClass {
  constructor() {
    console.log("User class is created");
  }

  async getUserByUserEmailOrId(userValue, type) {
    console.log(userValue);

    try {
      // This API is used in 2 seperate instances in the frontend. One parses the user email and the other parses the user id.
      // This is why we need to check the type of the userValue and query the database accordingly.
      // If the type is string, we query the database with the email. If the type is objectId, we query the database with the id.
      let query = {};

      if (type == "string") {
        query = { email: userValue };
      } else if (type == "objectId") {
        query = { _id: userValue };
      } else {
        throw new Error("Invalid user value");
      }

      let result = await Models.User.findOne(query);

      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
