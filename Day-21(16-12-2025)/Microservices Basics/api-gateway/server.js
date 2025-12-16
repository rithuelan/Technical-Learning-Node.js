
import express from "express";
import axios from "axios";

const app = express();

app.get("/users", async (req, res) => {
  const response = await axios.get("http://localhost:3001/users");
  res.json(response.data);
});

app.get("/orders", async (req, res) => {
  const response = await axios.get("http://localhost:3002/orders");
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway running on 3000");
});
