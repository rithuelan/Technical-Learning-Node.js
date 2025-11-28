import { pool } from "./db.js";

export async function runQueries() {
  console.log("Running SQL Examples...\n");

  // 1️⃣ SELECT
  const [selectResult] = await pool.query("SELECT * FROM employees");
  console.log("SELECT * FROM employees:");
  console.log(selectResult, "\n");

  // 2️⃣ WHERE
  const [whereResult] = await pool.query(
    "SELECT * FROM employees WHERE salary > 50000"
  );
  console.log("WHERE salary > 50000:");
  console.log(whereResult, "\n");

  // 3️⃣ INNER JOIN
  const [joinResult] = await pool.query(`
    SELECT e.name AS employee, d.name AS department
    FROM employees e
    JOIN departments d ON e.dept_id = d.id
  `);
  console.log("JOIN employees with departments:");
  console.log(joinResult, "\n");

  // 4️⃣ ORDER BY
  const [orderResult] = await pool.query(
    "SELECT name, salary FROM employees ORDER BY salary DESC"
  );
  console.log("ORDER BY salary DESC:");
  console.log(orderResult, "\n");

  // 5️⃣ GROUP BY
  const [groupResult] = await pool.query(`
    SELECT dept_id, COUNT(*) AS total_employees, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
  `);
  console.log("GROUP BY dept_id (aggregation):");
  console.log(groupResult, "\n");
}
