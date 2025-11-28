# 🗄️ SQL + Node.js ORM (Sequelize) — Complete Guide

A complete beginner-friendly guide covering **SQL Databases (PostgreSQL/MySQL)**, **basic SQL queries**, **Sequelize ORM**, **migrations**, **seeders**, and **model associations** with real code examples.

---

## 📚 Table of Contents
1. Introduction  
2. SQL Databases Basics  
3. PostgreSQL / MySQL Setup  
4. Basic SQL Queries  
5. Sequelize ORM  
6. Migrations & Seeders  
7. Relationships & Associations  
8. Run Instructions  

---

## 🧩 Introduction

This guide helps beginners understand:

- How SQL databases work  
- How to write SQL queries  
- How to use Sequelize ORM in Node.js  
- How to manage migrations and seeders  
- How to build relationships between tables  

Ideal for building scalable backend systems with relational databases.

---

## 🗄 SQL Databases Basics

SQL (Structured Query Language) is used in relational databases like:

- **PostgreSQL**  
- **MySQL**  
- **MariaDB**  
- **SQLite**

### ✔ Key Concepts

| Concept      | Meaning |
|--------------|---------|
| **Database** | Collection of tables |
| **Table** | Rows + Columns |
| **Row** | Single record |
| **Column** | Field (name, email, price) |
| **Primary Key** | Unique identifier (id) |
| **Foreign Key** | Connects two tables |

---

## 🐘 PostgreSQL / 🐬 MySQL Setup

### 📌 Install PostgreSQL
Download:  
https://www.postgresql.org/download/

Start DB:
```bash
psql -U postgres
Create DB:

sql
Copy code
CREATE DATABASE school_db;
📌 Install MySQL
Download:
https://dev.mysql.com/downloads/

Start DB:

bash
Copy code
mysql -u root -p
Create DB:

sql
Copy code
CREATE DATABASE school_db;
📊 Basic SQL Queries
👉 SELECT
sql
Copy code
SELECT * FROM students;
👉 WHERE
sql
Copy code
SELECT * FROM students WHERE age > 18;
👉 JOIN
sql
Copy code
SELECT students.name, courses.title
FROM students
JOIN enrollments ON students.id = enrollments.student_id
JOIN courses ON courses.id = enrollments.course_id;
⚙️ Sequelize ORM
📌 Install Sequelize + Database Driver
bash
Copy code
npm init -y
npm install sequelize mysql2 pg pg-hstore
🛠 Sequelize Configuration
📁 sequelize.config.js
js
Copy code
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school_db", "root", "password", {
  host: "localhost",
  dialect: "mysql", // change to "postgres" for PostgreSQL
});

module.exports = sequelize;
📦 Example Model — Student
📁 models/Student.js
js
Copy code
const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize.config");

const Student = sequelize.define("Student", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER
});

module.exports = Student;
🔄 Sync Models
js
Copy code
const sequelize = require("./sequelize.config");
const Student = require("./Student");

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced!");
});
📦 Migrations & Seeders
Install Sequelize CLI
bash
Copy code
npm install sequelize-cli
npx sequelize init
Generated folders:

arduino
Copy code
models/
migrations/
seeders/
config/
🏗 Migration Example — Create Students Table
Generate migration:

bash
Copy code
npx sequelize migration:generate --name create-students
Migration file:

js
Copy code
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Students", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      age: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Students");
  }
};
Run migration:

bash
Copy code
npx sequelize db:migrate
🌱 Seeder Example
Generate seeder:

bash
Copy code
npx sequelize seed:generate --name demo-students
Seeder file:

js
Copy code
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Students", [
      { name: "John", age: 20, createdAt: new Date(), updatedAt: new Date() },
      { name: "Alice", age: 22, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Students", null, {});
  }
};
Run all seeders:

bash
Copy code
npx sequelize db:seed:all
🔗 Relationships & Associations
🧑‍🎓 Student — 📘 Course (Many-to-Many)
js
Copy code
// Student.js
Student.belongsToMany(Course, { through: "Enrollments" });

// Course.js
Course.belongsToMany(Student, { through: "Enrollments" });
🏠 User — Address (One-to-Many)
js
Copy code
User.hasMany(Address);
Address.belongsTo(User);
🪪 Profile — User (One-to-One)
js
Copy code
User.hasOne(Profile);
Profile.belongsTo(User);
▶️ Run Instructions
1️⃣ Install dependencies
bash
Copy code
npm install
2️⃣ Configure DB in config/config.json
Example:

json
Copy code
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "school_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
3️⃣ Run migrations
bash
Copy code
npx sequelize db:migrate
4️⃣ Run seeders
bash
Copy code
npx sequelize db:seed:all
5️⃣ Run example script
bash
Copy code
node index.js
🎉 Conclusion
This guide covers:

SQL fundamentals

Writing SQL queries

Setting up PostgreSQL/MySQL

Using Sequelize ORM

Creating migrations & seeders

Building relationships between models

Running a complete SQL-based Node.js project

Perfect for backend developers learning relational databases + ORM.

📜 License
Free for personal, educational, and academic use.

yaml
Copy code

---