# MongoDB Aggregation Pipeline — Phase 4 (Complete Example)

## Installation

1. Clone the project
```
git clone your-repo-url
cd project-folder
```

2. Install dependencies
```
npm install
```

3. Configure environment

Create `.env` file:
```
MONGO_URL=mongodb://127.0.0.1:27017/aggregationsDemo
```

## Usage

1. Connect to MongoDB

`src/db.js` handles the database connection:
```javascript
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));
```

2. Seed Sample Data

Run the seeder to insert users, courses, lessons & enrollments.

```
node src/seed.js
```

You will see:
```
Seed completed
```

3. Run Aggregation Pipelines

The entire Phase 4 aggregation logic is in:
`src/aggregations.js`

Run the file:
```
node src/aggregations.js
```

You will see all results:
```
1️⃣ Top 5 Courses: [...]
2️⃣ Avg Progress: [...]
3️⃣ Total Lesson Duration: [...]
4️⃣ Completed All Lessons: [...]
5️⃣ Enrollments Per Instructor: [...]
6️⃣ Inactive Students: [...]
7️⃣ $facet Output: [...]
8️⃣ Duration Bucket: [...]
9️⃣ Lookup + Group: [...]
🔟 All pipelines executed successfully!
```

## API

This project does not provide a public API. It is a demonstration of MongoDB Aggregation Pipelines.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature/bug fix
3. Commit your changes
4. Push to the branch
5. Submit a pull request

