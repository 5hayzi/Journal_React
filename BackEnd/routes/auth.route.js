import express from "express";
import {
  DeleteUser,
  LogIn,
  SignUp,
  upload,
} from "../controller/auth.controller.js";

const authRouter = express.Router();

// Apply multer middleware to handle file uploads in signup route
authRouter.post("/signup", upload.single("img"), SignUp);
authRouter.post("/login", LogIn);
authRouter.delete("/delete", DeleteUser);

export default authRouter;
