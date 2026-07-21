import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

connectDb();

app.get("/hello_get", (req, res) => {
  res.send("Hello from get call123!!");
});

app.listen(9000, () => {
  console.log("Server started on port 9000");
});
