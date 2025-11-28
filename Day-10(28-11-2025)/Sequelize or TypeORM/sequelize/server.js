const { Sequelize, DataTypes } = require("sequelize");

// 1️⃣ Connect to MySQL
const sequelize = new Sequelize("testdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// 2️⃣ Define Models
const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

// 3️⃣ Associations (1 User → Many Posts)
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

// 4️⃣ Main Function
async function main() {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");

    await sequelize.sync({ force: true }); // recreate tables
    console.log("Models Synced!");

    // Create User
    const user = await User.create({
      name: "John Doe",
      email: "john@example.com",
    });

    // Create Post
    const post1 = await Post.create({
      title: "First Post",
      content: "Hello world!",
      userId: user.id,
    });

    const post2 = await Post.create({
      title: "Second Post",
      content: "Sequelize is awesome!",
      userId: user.id,
    });

    // Fetch with JOIN
    const data = await User.findAll({
      include: Post,
    });

    console.log(JSON.stringify(data, null, 2));

    // WHERE Clause
    const getSinglePost = await Post.findAll({
      where: { title: "First Post" },
    });
    console.log("Single Post:", getSinglePost);
  } catch (err) {
    console.log(err);
  }
}

main();
