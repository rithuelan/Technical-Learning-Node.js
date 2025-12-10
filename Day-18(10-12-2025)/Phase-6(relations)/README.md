# Phase 6 — Relationships in MongoDB (Mongoose)

This phase demonstrates:
- When to embed
- When to reference
- Many-to-many relationships
- Virtual fields
- Cascading operations
- Shallow vs Deep population
- Performance differences

---

## 1. Many-to-Many Relationship (Students ↔ Courses)

We use **Enrollment** as a separate collection.  
This is best because:

- Enrollment holds extra fields (progress, timestamps)
- Supports millions of enrollments without bloating Course or User
- Makes querying flexible and fast

---

## 2. Embedding (Lessons inside Course)

Lessons are **embedded** because:

- Lessons always belong to the course
- Lessons are small documents
- Reading a course should show lessons instantly (no join)

---

## 3. Referencing

We reference:

- `Course.instructor`
- `Enrollment.student`
- `Enrollment.course`

Referencing is best when:

- The document is reused many times
- The document grows independently
- Avoids duplication

---

## 4. Population (Shallow vs Deep)

- **Shallow populate:**  
  `Enrollment → student`

- **Deep populate:**  
  `Enrollment → course → instructor`

Deep populate adds nested JOIN-like operations and is slower.

---

## 5. Cascading Delete

When a Course is deleted → delete all enrollments.  
Handled in **pre("deleteMany")** middleware.

---

## 6. Cascading Update

When a course instructor changes → the course updates.  
Enrollments don’t need update because they reference the course, not the instructor.

---

## 7. Virtual Fields

`course.completion` is a computed property.  
Not stored in database.

---

## 8. Performance Comparison

- `populate()` is simpler but slower.
- Manual queries + caching is faster at scale.

---

## 9. Hybrid Design

Courses embed lessons (small, always needed).  
Enrollments reference students & courses (large, dynamic).

This gives the best balance between performance and flexibility.
