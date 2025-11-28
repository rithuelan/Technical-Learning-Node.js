const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: { type: Number, primary: true, generated: true },
    name: { type: String },
    email: { type: String },
  },
  relations: {
    posts: {
      target: "Post",
      type: "one-to-many",
      inverseSide: "user",
      cascade: true,
    },
  },
});
