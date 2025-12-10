# Phase 7 — Scaling & Transactions

## **Objective**
The goal of this phase is to understand MongoDB limitations, scaling techniques, and multi-document transactions. You will learn how MongoDB handles large datasets, transactions, and how schema design impacts performance.

---

## **Project Setup**

### **Installation**
1. Clone the repository:

git clone <your-repo-url>
cd <your-project-folder>
Install dependencies:


npm install
Set up environment variables:


cp .env.example .env
# Edit .env file with your MongoDB URI and options
Seed the database with sample data:


npm run seed
This will insert 1000+ fake students and 50+ courses for testing scaling and performance.

Project Structure

├─ src/
│  ├─ db.js             # MongoDB connection
│  ├─ models/
│  │  ├─ User.js        # User schema (students/instructors)
│  │  ├─ Course.js      # Course schema
│  │  ├─ Lesson.js      # Lesson schema (referenced in courses)
│  │  └─ Enrollment.js  # Enrollment schema (links students and courses)
│  ├─ seed.js           # Seed database with large datasets
│  └─ index.js          # Sample queries & transaction demos
├─ package.json
└─ README.md
Tasks & Implementation
1. Insert 1000+ Students & 50+ Courses
Use Faker.js or custom generator.

Demonstrates MongoDB's handling of large collections.

2. Query Courses with Students
Use populate() to fetch enrolled students.

Measure query performance using console.time() / console.timeEnd().

3. Implement Transaction
Use MongoDB sessions to perform multi-document operations:


const session = await mongoose.startSession();
session.startTransaction();
try {
    await Enrollment.create([{ student, course }], { session });
    await Course.updateOne({ _id: course._id }, { $inc: { totalStudents: 1 } }, { session });
    await session.commitTransaction();
} catch (error) {
    await session.abortTransaction();
} finally {
    session.endSession();
}
Ensures atomicity of enrollments and course updates.

4. Simulate Failed Transaction
Throw an error intentionally inside a transaction to observe rollback behavior.

5. Compare Read/Write Performance
Compare small vs large datasets.

Log execution times for queries and updates.

6. Shard Key Experimentation (Atlas)
If using MongoDB Atlas, test different shard keys to optimize read/write operations.

7. Analyze Slow Queries
Use explain() to identify performance bottlenecks.

Propose schema changes (e.g., embedding vs referencing, indexes).

8. Split Large Collections
Split collections logically (e.g., ActiveStudents vs ArchivedStudents) to improve performance.

9. Indexing Impact
Test queries with and without indexes.

Observe performance gains under high load.

10. Reflections on MongoDB Scaling
Multi-document transactions are expensive on large datasets.

Proper indexing is critical.

Schema design (embedding vs referencing) heavily influences performance.

Sharding is essential for horizontal scaling.

Running the Project

# Seed the database
npm run seed

# Run queries & transaction demos
npm start
Monitor the console for logs on performance, transaction success/failure, and query times.

Best Practices Learned
Use transactions only when necessary for multi-document consistency.

Index frequently queried fields.

Avoid heavy joins; prefer embedding when appropriate.

Test performance under realistic dataset sizes.

Plan sharding strategy early if expecting massive scale.

