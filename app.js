import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRouts.js";
import subScribeRoutes from "./routes/subscribeRoutes.js"

dotenv.config({ quiet: true });

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://afro-vids.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use("/api/auth", userRoutes);
app.use("/api/subscribe",subScribeRoutes)
connectDB();

export default app;
