# Sequelize Basic Example

This example demonstrates:

- Connecting to MySQL using Sequelize
- Creating models
- Defining one-to-many relationship
- CRUD operations
- Using WHERE, INCLUDE (JOIN)
- Syncing database tables

---

## Installation

```sh
npm init -y
npm install sequelize mysql2
Database
Create a MySQL database:

sql
Copy code
CREATE DATABASE testdb;
Update connection details in:

js
Copy code
new Sequelize("testdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
Run Example
sh
Copy code
node sequelize-example.js
Output Includes
User creation

Post creation

Join (User with Posts)

WHERE queries