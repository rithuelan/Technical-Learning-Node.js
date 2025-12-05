📚 Mongoose Course System — Complete Example

A full, self-contained demonstration of a MongoDB + Mongoose project that shows schema design, embedded vs referenced documents, custom validators, environment-based DB switching, seeding, and example queries with populate().

🚀 Project Overview

This example contains:

User, Lesson, Course, Enrollment schemas

Embedded lessons and referenced lessons in Course

Custom validators on fields (email, duration, progress)

Environment-switchable MongoDB URI (local / atlas)

Seeding script to populate test data

Example index.js that demonstrates queries and populate() usage

Project structure
phase-2/
│
├── package.json
├── .env.example
├── .env.local              # create this from .env.example
│
└── src/
    ├── db.js               # Mongoose connection
    │
    ├── models/
    │   ├── User.js
    │   ├── Lesson.js       # Referenced lesson schema
    │   ├── Course.js       # Embedded + Referenced lessons
    │   └── Enrollment.js
    │
    ├── seed.js             # Seeds test data
    └── index.js            # Example queries

⚙️ 1 — Prerequisites

Node.js (v14+ recommended)

MongoDB running locally (or an Atlas URI)

Mongo CLI / Compass if you want to inspect DB manually

🔧 2 — Install

From project root:

npm install
npm install --save-dev dotenv-cli

🧾 3 — Environment Setup

Copy ./.env.example to a local file and edit:

cp .env.example .env.local


Example .env.example (place at project root)

# .env.example
MONGO_URI=mongodb://localhost:27017/mongoose_course
NODE_ENV=local


Edit .env.local if needed (for Atlas, replace MONGO_URI with your connection string).

Important: src/db.js will throw an error if MONGO_URI is not set:
if (!MONGO_URI) throw new Error("MONGO_URI not set in env");

📦 4 — package.json scripts

Add these scripts to package.json (example shown in project):

"scripts": {
  "seed:local": "dotenv -e .env.local -- node src/seed.js",
  "start:local": "dotenv -e .env.local -- node src/index.js"
}


Run the seed or start script with npm run <script>.

🧩 5 — Models (summary)
src/models/User.js

Fields: name, email, role

Index: email unique

Custom validator: email must contain @

Example purpose: users can be instructors or students

src/models/Lesson.js

Fields: title, content, duration

Validator: duration > 0

Stored as referenced documents (can be shared across courses)

src/models/Course.js

Fields:

title, description

instructor → ObjectId ref User

students → [ObjectId] ref User

lessons → [ObjectId] ref Lesson (referenced lessons)

embeddedLessons → array of lesson subdocuments (embedded)

Demonstrates trade-offs:

Embedded: fast reads for course-contained lesson data, good when lesson data is course-specific

Referenced: single source of truth for shared lessons; better for reuse and updates

src/models/Enrollment.js

Fields:

course → ObjectId ref Course

student → ObjectId ref User

progress → Number (0–100) with validator

enrolledAt → Date

Use case: track student progress per course

🌱 6 — Seeding the Database

src/seed.js inserts sample users, lessons, courses, and enrollments. It should:

Connect using src/db.js

Insert users (instructors + students)

Insert lessons (referenced)

Create courses that include:

referenced lessons

embeddedLessons (copies)

instructor and students references

Create enrollments for student-course links with progress

Run the seeding script (local)
npm run seed:local


Expected console output:

Connected to MongoDB(local)
Users inserted
Lessons inserted
Courses inserted
Enrollments inserted
Done


If validation fails, seed.js logs ValidationError details — check invalid fields.

▶️ 7 — Example Queries (src/index.js)

index.js demonstrates typical queries using populate():

Fetch courses and populate:

instructor (User)

lessons (referenced Lesson)

students (User list)

Log both referenced lessons length and embeddedLessons length

Example console output:

Course: Full Stack Bootcamp
Instructor: John Doe
Lessons (referenced): 5
Lessons (embedded): 3

Example usage

Run example queries (local):

npm run start:local

🔍 8 — Common Use Cases & Notes

Embedded lessons: good when lessons are small and tightly coupled to the course (fast read, no extra query).

Referenced lessons: use when lessons are shared between courses or updated frequently (single source of truth).

Populate: Model.find().populate('instructor').populate('lessons') to replace ObjectId with full doc.

Validators: Mongoose schema validators run on .save() and during Model.create(); seeding must satisfy validators.

🧪 9 — Validators Included

User.email: must include @ — prevents bad emails in DB

Lesson.duration: must be > 0 — ensures meaningful durations

Enrollment.progress: must be >=0 && <=100 — valid progress percentage

If you see ValidationError, inspect the field messages printed by seed or the save operation.

🧰 10 — Debugging Tips

Error: MONGO_URI not set in env
→ Ensure .env.local exists and contains MONGO_URI; run seed/start via dotenv -e .env.local -- node ... or use the npm run scripts above.

ValidationError during seeding
→ Check seed.js input objects for invalid fields (email missing @, lesson duration <= 0, progress out of range).

Connection refused
→ Make sure MongoDB is running. For default local: mongod is running and accessible at mongodb://localhost:27017.

Inspect DB
→ Use MongoDB Compass or mongo shell to view mongoose_course database and collections.

✅ 11 — Recommended Workflow

Configure .env.local with your MONGO_URI

Run npm run seed:local to populate test data

Run npm run start:local to execute example queries

Modify models or seed data to experiment with embedded vs referenced behavior

Use populate() to fetch related documents in queries

🧾 12 — Example src/db.js (reference behavior)

src/db.js should:

Load dotenv (or be invoked via dotenv-cli)

Read MONGO_URI and connect with mongoose.connect(MONGO_URI, options)

Export mongoose or connection for use in other modules

Pseudo-behavior:

const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error("MONGO_URI not set in env");
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;

🧾 13 — Example seed.js flow (high level)

Connect to DB (via src/db.js)

Clear existing test data (optional)

Create sample User documents (instructors + students)

Create Lesson documents

Create Course documents with:

instructor = a user's _id

lessons = array of lesson _ids (referenced)

embeddedLessons = array of lesson subdocs (copies)

students = array of student _ids

Create Enrollment documents linking students to courses

Log results and exit

🔒 14 — Security & Production Notes

Never commit real credentials to the repo — use .env.local or environment variables in CI.

For production, use proper access control and authentication.

Consider using Mongoose's timestamps for created/updated tracking.

Add indexes for commonly queried fields (email unique index already included).

📚 15 — Extend & Experiment Ideas

Switch embedded lessons to full referenced model and measure query performance.

Add full-text search on lesson titles.

Implement soft deletes (archived flag) and cascade behavior.

Add REST API endpoints to manage courses, enrollments, and lessons.

Add unit tests for schema validation and seed script logic.
