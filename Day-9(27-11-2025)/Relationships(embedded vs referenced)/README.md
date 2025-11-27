# 📘 MongoDB Relationships — Embedded & Referenced (Mongoose ODM)

This project demonstrates **two types of MongoDB relationships** using **Node.js, Express, and Mongoose**.

---

## 🔵 Embedded Relationship
A document contains another document inside it.

**Example:**  
User → Addresses (array embedded)

User
└── addresses: [
{ street, city, state },
{ street, city, state }
]

yaml
Copy code

---

## 🟢 Referenced Relationship (Normalization)
Documents reference each other using **ObjectId**.

**Example:**  
Student → Department

Student
└── dept: ObjectId("department_id")

Department
└── name: "CSE"

yaml
Copy code

---

## 📂 Project Structure

relationships-demo/
│
├── server.js
├── config.js
│
├── models/
│ ├── userModel.js
│ ├── departmentModel.js
│ └── studentModel.js
│
└── routes/
├── userRoutes.js
├── departmentRoutes.js
└── studentRoutes.js

yaml
Copy code

---

## 🛠️ Setup Instructions

### 1️⃣ Install dependencies
npm install

shell
Copy code

### 2️⃣ Start MongoDB
net start MongoDB

shell
Copy code

### 3️⃣ Start server
node server.js

arduino
Copy code

Server Output:
MongoDB Connected ✔
Server running on port 5000

yaml
Copy code

---

## 🚀 API Routes

### 🔵 Embedded User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users | Create user with embedded addresses |
| PUT | /api/users/:id/address | Add new address to user |
| GET | /api/users | Get all users |

---

### 🟢 Referenced Student Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/students/department | Create department |
| POST | /api/students | Create student with dept reference |
| GET | /api/students | Get students + populated department |

---

## 🎯 Features

- Embedded One-to-Many relationship  
- Referenced One-to-Many relationship  
- Clean folder structure  
- Mongoose schema + model + populate  
- Full CRUD support  
- Beginner friendly  

---

## 📜 License
Free to use for learning & academic purposes.