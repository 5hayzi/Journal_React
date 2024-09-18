import User from "../Model/user.model.js";
import bcrypt from 'bcrypt'
import { errorHandler } from "../utils/error.js";

export const SignUp = async (req, res, next) =>{
    const {name, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({name, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("user created succesfully"); 
    } catch (error) {
       next(errorHandler(500, "Error From Funtion"));
    }
    
}