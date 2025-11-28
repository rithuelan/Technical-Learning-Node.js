# TypeORM Basic Example

This example demonstrates:

- Connecting to MySQL using TypeORM
- Using Entities (User, Post)
- One-to-many relation (User → Posts)
- CRUD operations using Repositories
- JOIN using relations

---

## Installation

```sh
npm init -y
npm install typeorm reflect-metadata mysql2
Database
sql
Copy code
CREATE DATABASE testdb;
Folder Structure
bash
Copy code
/entities
  User.js
  Post.js
typeorm-example.js
Run
sh
Copy code
node typeorm-example.js
Features
Auto table creation (synchronize: true)

Repository CRUD

Relation loading