// order-service/server.js
import express from "express";
const app = express();

app.get("/orders", (req, res) => {
  res.json([{ id: 101, userId: 1, item: "Book" }]);
});

app.listen(3002, () => {
  console.log("Order Service running on 3002");
});
