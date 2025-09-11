import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import {connectDB}  from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRouts.js"

dotenv.config({ quiet: true });
const PORT = process.env.PORT || 5001

const app = express();
app.use(express.json())
app.use(cors({
  origin: ["http://localhost:3000", "https://afro-vids.vercel.app"],
  credentials: true
}))
app.use(cookieParser());

app.use("/api/auth",userRoutes)

const startServer = async ()=>{
    await connectDB();
    app.listen(PORT, ()=>{
        console.log(`server listened on port ${PORT}`);
    })
}

startServer()