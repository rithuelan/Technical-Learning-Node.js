# SQL Database CRUD API (PostgreSQL + MySQL)

A simple CRUD API using Node.js + Express with SQL databases.
Supports both **PostgreSQL** and **MySQL**.

---

## Features

✔ Full CRUD  
✔ PostgreSQL & MySQL support  
✔ Clean folder structure  
✔ Beginner friendly  
✔ Easy database switching  

---

## Project Structure
```
sql-database-basics/
│── server.js
│── package.json
│── db/
│     ├── postgres.js
│     └── mysql.js
│── routes/
│     └── students.js
```

---

## Installation

```sh
npm install
```

---

## Database Setup

### PostgreSQL
```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120) UNIQUE,
  age INT
);
```

### MySQL
```sql
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120) UNIQUE,
  age INT
);
```

---

## Choose Your Database
In `routes/students.js`:

```js
// For PostgreSQL
// import { pool } from "../db/postgres.js";

// For MySQL
import { pool } from "../db/mysql.js";
```

---

## Run Server
```sh
npm start
```

Server:  
```
http://localhost:5000
```

---

## API Endpoints

### Create Student
```
POST /api/students
{
  "name": "John",
  "email": "john@gmail.com",
  "age": 21
}
```

### Get All Students
```
GET /api/students
```

### Update Student
```
PUT /api/students/1
```

### Delete Student
```
DELETE /api/students/1
```

---

## Notes
- Works with any SQL database
- SQL injection protected using prepared statements
- Clean & simple structure for learning

---

## Author
Built for SQL + Node.js beginners ❤️