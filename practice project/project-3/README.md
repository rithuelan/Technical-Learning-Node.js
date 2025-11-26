# 🛒 E-Commerce Website (Node.js + Express + Local JSON Storage)

A mini e-commerce backend project built using **Node.js, Express, EJS, Multer, and Local JSON Storage** (no database required).  
This project demonstrates API versioning, CRUD operations, file uploads, custom middleware, and MVC structuring — perfect for beginners and learning projects.

---

## 📌 Features

### 🧩 Core Features
- Full **CRUD API** for products  
- **API Versioning**
  - **v1** → basic response  
  - **v2** → full CRUD + file uploads  
- **JSON File Storage** (acts as a local database)  
- **Product Image Upload** using Multer  
- **Custom Middlewares**
  - Logger  
  - Auth  
  - Error Handler  
- **Input Validation** using express-validator  
- **EJS Templates** for frontend views  
- Static file serving (HTML, CSS, JS, images)  
- Cookie-based authentication demo  

---

## 📁 Project Structure

project-3/
└── E-commerce website/
├── package.json
├── server.js
├── data/
│ └── products.json
├── config/
│ └── db.js
├── public/
│ └── index.html
├── uploads/ (auto-saved uploaded images)
├── views/
│ └── home.ejs
├── middleware/
│ ├── logger.js
│ ├── auth.js
│ └── errorHandler.js
├── validators/
│ └── productValidator.js
├── routes/
│ ├── v1/products.js
│ ├── v2/products.js
│ └── web.js
└── controllers/
└── productController.js


---

## ⚙️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| Node.js | Backend runtime |
| Express.js | Server framework |
| EJS | Template engine |
| Multer | File uploads |
| Express Validator | Input validation |
| JSON Storage | Acts as database |
| Cookie Parser | Simple session/cookie auth |

---

## 🛠 Installation & Setup

### 1️⃣ Clone or Download the Project
```bash
cd "project-3/E-commerce website"
2️⃣ Install Required Packages
bash

npm install
3️⃣ Create Uploads Folder (if not present)
bash
mkdir uploads
4️⃣ Start the Server
bash
npm start
5️⃣ Access the App
Purpose	URL
Web Home Page	http://localhost:3000
API v1	http://localhost:3000/api/v1/products
API v2	http://localhost:3000/api/v2/products

📘 API Documentation
🔹 GET /api/v2/products
Fetch all products.

json

{
  "success": true,
  "data": [...]
}
🔹 POST /api/v2/products
Create a new product.

Form-Data Fields:
Field	Type	Required
name	text	Yes
price	number	Yes
image	file	No

🔹 PUT /api/v2/products/:id
Update an existing product.

🔹 DELETE /api/v2/products/:id
Delete a product.

🧠 How Local JSON Storage Works
All product data is stored in:

bash

data/products.json
Controller functions handle:

Reading the JSON file

Parsing data

Modifying objects

Writing updated data back

Perfect for:
✔ Beginners
✔ Practice projects
✔ Offline apps
✔ Demos

📂 Important Files Explained
server.js
Loads middleware

Sets up view engine

Loads routes

Starts server

controllers/productController.js
Handles:

Read JSON

Write JSON

Create product

Update product

Delete product

middleware/
logger.js → Logs every request

auth.js → Cookie-based authentication demo

errorHandler.js → Centralized error handler

routes/
web.js → Renders UI pages

v1/products.js → Simple versioned API

v2/products.js → Full CRUD API

views/home.ejs
Renders product list in HTML + EJS.

📸 File Upload System (Multer)
Accepts image files

Stores them in /uploads

Saves filename inside the product object

🧪 Testing the API (Postman)
Create Product → POST /api/v2/products

Use form-data

Key	Type
name	text
price	number
image	file

🐞 Error Handling
Handled globally using the error middleware.

Example:

json

{
  "error": "Something went wrong"
}
🏁 Future Enhancements (Optional)
I can add if you want:

✔ JWT Authentication

✔ Admin Panel

✔ Cart System

✔ Search + Filters

✔ Categories

✔ Login / Signup

🎉 Conclusion
This project teaches:

Express.js structure

MVC pattern

Local JSON storage

File uploads with Multer

API versioning

Middlewares (auth, logger, error handler)

Serving static files

EJS templating

A perfect project for beginners exploring Node.js backend development.