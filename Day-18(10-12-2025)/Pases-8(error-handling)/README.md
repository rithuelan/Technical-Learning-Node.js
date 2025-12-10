# Phase 8 — Error Handling & Testing

### **Installation**
1. Clone the repository:

git clone <your-repo-url>
cd <your-project-folder>
Install dependencies:


npm install
Set up environment variables:


cp .env.example .env
# Update .env with MongoDB URI and other configuration
Seed database (optional):

npm run seed
Project Structure

├─ src/
│  ├─ db.js                 # MongoDB connection
│  ├─ models/
│  │  ├─ User.js            # User schema with validation
│  │  ├─ Course.js          # Course schema with validation
│  │  ├─ Lesson.js          # Lesson schema
│  │  └─ Enrollment.js      # Enrollment schema
│  ├─ routes/               # API routes
│  ├─ middleware/
│  │  └─ errorHandler.js    # Express error-handling middleware
│  ├─ seed.js               # Seed sample data
│  └─ index.js              # Express server entry point
├─ tests/
│  ├─ unit/
│  │  ├─ user.test.js
│  │  ├─ course.test.js
│  │  └─ enrollment.test.js
│  └─ integration/
│     └─ api.test.js
├─ package.json
└─ README.md

# Tasks & Implementation
1. Express Error-Handling Middleware
Centralized middleware to catch all errors:


app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
2. Mongoose Validation
Example: Unique email constraint in User model.

Invalid data insertion triggers Mongoose validation errors.

3. Unit Tests
Test models independently for validation, defaults, and schema rules.


npm run test:unit
4. Integration Tests (Supertest)
Test API endpoints for success and failure cases.

npm run test:integration
5. Bulk Insert Failure Handling
Use try-catch or insertMany({ ordered: false }) to handle partial failures.

6. Conditional Delete Failures
Test deletion of documents that fail certain conditions (e.g., foreign key references).

7. Aggregation Pipeline Tests
Handle missing or invalid data gracefully using $ifNull, $cond, and other operators.

8. Index Uniqueness Tests
Ensure duplicate data violates unique indexes and triggers proper errors.

9. Meaningful Logging
Log errors with sufficient detail for debugging.

Avoid leaking sensitive information.

10. Documentation
Record how different errors affect application behavior.

Note recommended fixes and preventive measures.

Running Tests

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Run all tests
npm test
Best Practices Learned
Always validate data at the model level.

Use centralized error handling to avoid scattered try-catch blocks.

Log meaningful errors without exposing sensitive info.

Write unit tests to ensure model integrity.

Write integration tests to ensure API reliability.

Test failure scenarios, not just success cases.