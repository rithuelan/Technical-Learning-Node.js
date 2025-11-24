# Express Router Modules – Detailed Guide

## 📌 Introduction
This project demonstrates how to use **Express Router Modules** to structure Node.js applications.  
Router modules help developers split routing logic into separate files, making the code clean, organized, and scalable.

---

## 📁 Project Structure
```
project/
│
├── server.js
├── routes/
│     ├── userRoutes.js
│     └── productRoutes.js
└── controllers/
      ├── userController.js
      └── productController.js
```

---

## 📦 Installation

```bash
npm install express
```

---

## 🚀 Running the Project

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🛣 Routes Overview

### **User Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/` | Get all users |
| POST | `/users/` | Create a user |

### **Product Routes**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products/` | Get all products |
| POST | `/products/` | Add a product |

---

## 🧠 Concepts Covered
- Router modules  
- Controller structure  
- Prefixing routes  
- Clean separation of logic  
- Scalable Express architecture  

---

## 🛠 Why Use Router Modules?
- Easier to maintain  
- Supports large applications  
- Avoids route clutter inside `server.js`  
- Reusable and clean code  

---


