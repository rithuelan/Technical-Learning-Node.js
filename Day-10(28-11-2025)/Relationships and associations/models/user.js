"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // One-To-One
      User.hasOne(models.Profile, { foreignKey: "userId" });

      // One-To-Many
      User.hasMany(models.Post, { foreignKey: "userId" });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    { sequelize, modelName: "User" }
  );
  return User;
};
