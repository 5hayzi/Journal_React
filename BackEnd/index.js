import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(helmet());
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
  
  app.use(cors(corsOptions));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.static('uploads'))

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

mongoose
    .connect(process.env.Mongo)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server on port 3000");
        });
    })
    .catch((err) => {
        console.log(err);
    });
