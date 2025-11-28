# Sequelize Migrations & Seeders Example

This example shows how to use **Sequelize CLI** for database migrations and seeders.

## 🛠 Features
- Creating tables with migrations
- Rolling back migrations
- Inserting dummy data using seeders
- Removing seed data
- Managing database schema versions

---

# 📌 1. Install Dependencies

```sh
npm init -y
npm install sequelize sequelize-cli mysql2
📌 2. Initialize Sequelize
sh
Copy code
npx sequelize-cli init
Folder structure created:

bash
Copy code
/config
/models
/migrations
/seeders
📌 3. Configure Database
Edit config/config.json:

json
Copy code
{
  "development": {
    "username": "root",
    "password": "",
    "database": "migration_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
Create DB:

sql
Copy code
CREATE DATABASE migration_demo;
📌 4. Create Migration
sh
Copy code
npx sequelize-cli migration:generate --name create-users
Migration template:

js
Copy code
await queryInterface.createTable("Users", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
Run migration:

sh
Copy code
npx sequelize-cli db:migrate
📌 5. Create Seeder
sh
Copy code
npx sequelize-cli seed:generate --name demo-users
Seeder template:

js
Copy code
await queryInterface.bulkInsert("Users", [
  { name: "Alice", email: "alice@example.com", createdAt: new Date(), updatedAt: new Date() },
  { name: "Bob", email: "bob@example.com", createdAt: new Date(), updatedAt: new Date() }
]);
Run seeds:

sh
Copy code
npx sequelize-cli db:seed:all
📌 6. Undo Commands
Undo last migration:

sh
Copy code
npx sequelize-cli db:migrate:undo
Undo all seeds:

sh
Copy code
npx sequelize-cli db:seed:undo:all
✔ You Have Learned
What migrations are

How to create DB tables via CLI

How to insert dummy data

How to undo changes safely

🎉 End of README
yaml
Copy code

---
