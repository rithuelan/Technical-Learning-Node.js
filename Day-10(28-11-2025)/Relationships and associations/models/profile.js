"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // Reverse One-To-One
      Profile.belongsTo(models.User, { foreignKey: "userId" });
    }
  }

  Profile.init(
    {
      bio: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    { sequelize, modelName: "Profile" }
  );
  return Profile;
};
