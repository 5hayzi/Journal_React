import express from 'express'
import { LogIn, SignUp } from '../controller/auth.controller.js';

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", LogIn);

export default authRouter;