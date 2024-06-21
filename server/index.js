import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from 'dotenv'
import cors from "cors";

const app = express();

dotenv.config()

const PORT = process.env.PORT || 9000;
connectDB();
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is Running");
});

//routes

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`API is Running on http://localhost:${PORT}`);
});
