// order-service/server.js
import axios from "axios";

app.get("/orders-with-user", async (req, res) => {
  const users = await axios.get("http://localhost:3001/users");
  res.json({
    orderId: 101,
    user: users.data[0]
  });
});
