const express = require("express");
const app = express();

app.use(express.json());

// Temporary in-memory data
let users = [
  { id: 1, name: "Rithiha" },
  { id: 2, name: "Elan" }
];

// GET → Read all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET → Read single user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
});

// POST → Create new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT → Update user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  res.json(user);
});

// DELETE → Delete user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("REST API running at http://localhost:3000"));
