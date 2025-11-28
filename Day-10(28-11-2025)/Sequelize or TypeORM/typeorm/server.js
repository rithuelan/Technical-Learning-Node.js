require("reflect-metadata");
const { DataSource } = require("typeorm");

// 1️⃣ Entities
const User = require("./entities/User");
const Post = require("./entities/Post");

// 2️⃣ Connect to MySQL
const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "testdb",
  synchronize: true,
  logging: false,
  entities: [User, Post],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("DB Connected!");

    const userRepo = AppDataSource.getRepository(User);
    const postRepo = AppDataSource.getRepository(Post);

    // Create user
    const user = userRepo.create({
      name: "Alice",
      email: "alice@gmail.com",
    });
    await userRepo.save(user);

    // Create posts
    const post1 = postRepo.create({
      title: "Hello TypeORM",
      content: "TypeORM is great!",
      user: user,
    });

    const post2 = postRepo.create({
      title: "Relations in TypeORM",
      content: "Learning 1-M relationship",
      user: user,
    });

    await postRepo.save([post1, post2]);

    // JOIN Query
    const result = await userRepo.find({
      relations: ["posts"],
    });

    console.log(JSON.stringify(result, null, 2));
  })
  .catch((err) => console.error(err));
