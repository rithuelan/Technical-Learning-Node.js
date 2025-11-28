import express from "express";
// Choose one:
// import { pool } from "../db/postgres.js";
import { pool } from "../db/mysql.js";

const router = express.Router();

// ⭐ CREATE STUDENT
router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // PostgreSQL
    // const query = `INSERT INTO students(name,email,age) VALUES($1,$2,$3) RETURNING *`;
    // const values = [name, email, age];
    // const result = await pool.query(query, values);
    // res.json(result.rows[0]);

    // MySQL
    const [result] = await pool.query(
      "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
      [name, email, age]
    );
    res.json({ id: result.insertId, name, email, age });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ⭐ READ ALL STUDENTS
router.get("/", async (req, res) => {
  try {
    // PostgreSQL → const result = await pool.query("SELECT * FROM students");
    // MySQL →
    const [rows] = await pool.query("SELECT * FROM students");
    res.json(rows);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ⭐ UPDATE STUDENT
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    // MySQL
    const [result] = await pool.query(
      "UPDATE students SET name=?, email=?, age=? WHERE id=?",
      [name, email, age, id]
    );

    res.json({ message: "Updated Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ⭐ DELETE STUDENT
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // MySQL
    await pool.query("DELETE FROM students WHERE id=?", [id]);

    res.json({ message: "Deleted Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
