// order-service/server.js
import axios from "axios";
import { services } from "../service-registry.js";

app.get("/orders-with-user", async (req, res) => {
  const userServiceUrl = services.userService;
  const users = await axios.get(`${userServiceUrl}/users`);
  res.json(users.data);
});
