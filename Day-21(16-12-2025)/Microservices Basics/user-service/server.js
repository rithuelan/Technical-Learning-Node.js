// user-service/server.js
import express from "express";
const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

app.listen(3001, () => {
  console.log("User Service running on 3001");
});
