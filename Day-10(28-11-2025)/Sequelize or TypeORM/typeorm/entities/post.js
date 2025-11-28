const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Post",
  tableName: "posts",
  columns: {
    id: { type: Number, primary: true, generated: true },
    title: { type: String },
    content: { type: String },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
    },
  },
});
