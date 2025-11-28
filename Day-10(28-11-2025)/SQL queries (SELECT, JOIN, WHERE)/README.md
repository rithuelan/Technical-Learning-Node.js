# SQL Queries Demo (SELECT, WHERE, JOIN, GROUP BY, ORDER BY)

A complete example project demonstrating SQL queries using MySQL + Node.js.

---

## Features

✔ SELECT  
✔ WHERE filters  
✔ INNER JOIN  
✔ ORDER BY  
✔ GROUP BY + Aggregation  
✔ MySQL database with sample tables  
✔ Node.js backend executing SQL queries  

---

## Project Structure

```
sql-queries-demo/
│── server.js
│── db.js
│── queries.js
└── package.json
```

---

## Database Setup (MySQL)

### Create Database

```sql
CREATE DATABASE company_db;
USE company_db;
```

### Create Tables

```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  dept_id INT,
  salary INT
);

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```

### Insert Data

```sql
INSERT INTO departments (name) VALUES
('HR'), ('Engineering'), ('Sales');

INSERT INTO employees (name, dept_id, salary) VALUES
('Alice', 1, 45000),
('Bob', 2, 70000),
('Charlie', 2, 80000),
('David', 3, 30000),
('Eva', 3, 50000);
```

---

## Run Instructions

```sh
npm install
npm start
```

Then open:

```
http://localhost:5000
```

All SQL queries will run and show results in the **terminal**.

---

## SQL Queries Included

### SELECT
```sql
SELECT * FROM employees;
```

### WHERE
```sql
SELECT * FROM employees WHERE salary > 50000;
```

### JOIN
```sql
SELECT e.name, d.name
FROM employees e
JOIN departments d ON e.dept_id = d.id;
```

### ORDER BY
```sql
SELECT name, salary FROM employees ORDER BY salary DESC;
```

### GROUP BY
```sql
SELECT dept_id, COUNT(*) AS total_employees
FROM employees
GROUP BY dept_id;
```

---

## Author
Created for learning SQL + Node.js basics 🚀