import express from 'express'
import { LogIn, SignUp } from '../controller/auth.controller.js';

const authRouter = express.Router();

authRouter.post("/SignUp", SignUp);
authRouter.post("/LogIn", LogIn);

export default authRouter;