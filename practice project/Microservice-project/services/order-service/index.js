import express from "express";
import { publishEvent } from "./events.js";


const app = express();
app.use(express.json());


app.post("/orders", async (req, res) => {
const order = { id: Date.now(), ...req.body };


// Event sourcing
publishEvent("OrderCreated", order);


res.json({ message: "Order created", order });
});


app.listen(4001, () => console.log("Order Service on 4001"));