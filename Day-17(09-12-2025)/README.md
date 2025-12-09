# MongoDB Indexing & Performance Test

## 1. Install dependencies
npm install

## 2. Update MongoDB connection
Edit `.env`

## 3. Seed database (1200 users + courses)
npm run seed

## 4. Run performance tests
npm run test:performance

## What this measures:
- Unique index on email
- Compound index role + email
- Text index title + description
- Query time before/after index
- explain() index usage
- 1000+ user performance
- Drop index and observe slowdown

🗑️ Drop / Recreate Indexes (Run in Node REPL or separate file)
await User.collection.dropIndex("email_1");
await User.collection.createIndex({ email: 1 }, { unique: true });

✅ HOW TO RUN — Step-by-Step
1. Create folder
mkdir indexing-performance
cd indexing-performance

2. Add all files above
3. Install dependencies
npm install

4. Start MongoDB locally
mongod

5. Seed 1000+ users
npm run seed

6. Run performance tests
npm run test:performance


You will see:

✔ Slow query (no index)
✔ Fast query (with index)
✔ explain() plan
✔ text index performance



