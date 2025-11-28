"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Post belongs to User
      Post.belongsTo(models.User, { foreignKey: "userId" });

      // Many-to-Many with Tags
      Post.belongsToMany(models.Tag, {
        through: "PostTag",
        foreignKey: "postId"
      });
    }
  }

  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    { sequelize, modelName: "Post" }
  );
  return Post;
};
