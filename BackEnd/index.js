import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import helmet from 'helmet'
import cors from 'cors'

dotenv.config();



const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err,req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal Server Error";
    res.status(statusCode).json({
        success :false,
        statusCode,
        message,
    });
});

mongoose
    .connect(process.env.Mongo)
    .then(()=>{
        console.log("Connected to MongoDb");
        app.listen(3000,()=>{
            console.log("Server on 3000 port")
        }) 
    })
    .catch((err)=>{
        console.log(err);  
    })