import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB");
        
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!");
    
})

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!");
    
})

//Middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors());
app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

app.use((err,req,res,next)=>{
    const errorStatus= err.status || 500
    const errorMessage= err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(8000,()=>{
    connect()
    console.log("Connected to backend.")
})

