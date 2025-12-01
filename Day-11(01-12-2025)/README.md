# 🗄 MongoDB Advanced Project — Node.js + Express

This project demonstrates an **advanced MongoDB setup** with **Node.js** and **Express**, covering:

- MongoDB Atlas connection  
- Compass integration  
- Express API integration  
- CRUD operations  
- Pagination, sorting, indexing  
- Aggregation pipelines  
- GridFS file upload/download  
- Logging, status codes, and performance testing  
- MongoDB shell operations and backups  

---

## 📁 Project Structure

mongo-advanced-project/
│── package.json
│── server.js
│── .env
├── config/
│ └── db.js # MongoDB connection
├── logs/
│ └── app.log # Application logs
├── uploads/ # Temporary uploads (GridFS stores in DB)
│ ├── images/
│ └── bucket/
├── models/
│ ├── user.model.js
│ ├── product.model.js
│ ├── order.model.js
│ └── warehouse.model.js
├── routes/
│ ├── user.routes.js
│ ├── product.routes.js
│ ├── order.routes.js
│ ├── warehouse.routes.js
│ └── file.routes.js # GridFS routes
├── controllers/
│ ├── user.controller.js
│ ├── product.controller.js
│ ├── order.controller.js
│ ├── warehouse.controller.js
│ └── file.controller.js # GridFS controller
├── middleware/
│ ├── logger.js # Custom logger
│ ├── errorHandler.js # Error handling
│ └── asyncHandler.js # Async wrapper
└── utils/
├── gridfs.js # GridFS bucket initialization
└── pagination.js # Pagination helper

yaml
Copy code

---

## 🔗 MongoDB Connection

### Atlas
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
2. Create a cluster  
3. Whitelist your IP  
4. Create a database user  
5. Copy the connection string:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

markdown
Copy code

### Compass
1. Open MongoDB Compass  
2. Paste the Atlas connection string  
3. Test connection  

### Node.js Integration
Install dependencies:
```bash
npm install express mongoose dotenv cors morgan cookie-parser
Create .env:

ini
Copy code
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
Connect in server.js or config/db.js:

js
Copy code
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
🗃 Database Design
Collections & Relationships:

User → user info

Product → product details

Order → order info with embedded products

Warehouse → stock locations

Relationships:

User → Orders

Order → Products

Product → Warehouse

📝 Schemas (Example)
js
Copy code
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    createdAt: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    warehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" }
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number }],
    status: String,
    createdAt: { type: Date, default: Date.now }
});

const warehouseSchema = new mongoose.Schema({
    location: String,
    capacity: Number
});
⚙ CRUD Operations
Method	Action
POST	Create document
GET	Read one/all
PATCH / PUT	Update document
DELETE	Remove document

Example Route:

js
Copy code
router.get("/", productController.getAllProducts);
📄 Pagination, Sorting & Indexes
js
Copy code
// Pagination
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;

// Sorting
const sortBy = req.query.sort || "createdAt";

// Index
productSchema.index({ name: 1 });
🔍 Aggregation Examples
js
Copy code
// $match
Product.aggregate([{ $match: { price: { $gte: 100 } } }]);

// $group
Order.aggregate([{ $group: { _id: "$user", totalOrders: { $sum: 1 } } }]);

// $project
Product.aggregate([{ $project: { name: 1, price: 1 } }]);

// $sort, $skip, $limit
Product.aggregate([{ $sort: { price: -1 } }, { $skip: 10 }, { $limit: 5 }]);

// $unwind
Order.aggregate([{ $unwind: "$items" }]);

// $first & $last
Product.aggregate([{ $group: { _id: "$category", firstProduct: { $first: "$name" }, lastProduct: { $last: "$name" } } }]);

// Multi-collection $lookup
Order.aggregate([
    { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "userDetails" } },
    { $lookup: { from: "products", localField: "items.product", foreignField: "_id", as: "productDetails" } }
]);
🖼 GridFS – File Upload / Download
Upload files using multer + GridFSBucket

Example Routes:

POST /api/files/upload

GET /api/files

GET /api/files/:id

📊 Status Codes
Code	Meaning
200	Success
201	Created
400	Bad Request
404	Not Found
500	Server Error

📝 Logging
morgan + middleware/logger.js

Logs requests and operations to logs/app.log

🧪 Postman Performance Testing
Test all API routes

Monitor response times (>300ms triggers optimization)

🖥 Mongo Shell Operations
js
Copy code
// Update many
db.products.updateMany({}, { $set: { inStock: true } });

// Rename field
db.users.updateMany({}, { $rename: { "role": "userRole" } });

// Drop collection
db.orders.drop();

// Backup database
mongodump --uri "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>" --out ./backup
🚀 Setup & Run
Clone repository

Install dependencies:

bash
Copy code
npm install
Create .env with MONGO_URI and PORT

Start server:

bash
Copy code
npm start
Test APIs using Postman or frontend

🎯 Features Summary
Advanced MongoDB features (Atlas, Compass, GridFS)

CRUD with pagination, sorting, indexing

Aggregation pipelines & multi-collection joins

Logging and performance tracking

Mongo shell commands and database backup

📜 License
Free for educational, practice, and academic use.

yaml
Copy code

---

This README is **fully structured, ready to paste**, and covers all sections of your advanced MongoDB project.  

I can also create a **diagram of relationships + GridFS flow** for this README