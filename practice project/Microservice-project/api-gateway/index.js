import express from "express";
import axios from "axios";


const app = express();
app.use(express.json());


app.post("/orders", async (req, res) => {
const response = await axios.post("http://localhost:4001/orders", req.body);
res.json(response.data);
});


app.listen(4000, () => console.log("API Gateway running on 4000"));