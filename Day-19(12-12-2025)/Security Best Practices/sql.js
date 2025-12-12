const [row] = await db.execute(
  "SELECT * FROM users WHERE email = ? AND password = ?",
  [email, password]
);
