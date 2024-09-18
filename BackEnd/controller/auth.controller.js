import User from "../Model/user.model.js";
import bcrypt from 'bcrypt'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const SignUp = async (req, res, next) =>{
    const {name, email, password, img, twoFactor} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({name, email, password:hashedPassword, img, twoFactor});
    try {
        await newUser.save()
        res.status(201).json("user created succesfully"); 
    } catch (error) {
       next(errorHandler(501, "Error From Funtion"));
    }
    
}

export const LogIn = async (req, res, next)=>{
    const {email, password}= req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User Not Found!'))
        const validPasswrord = bcrypt.compareSync(password, validUser.password);
        if (!validPasswrord) return next(errorHandler(401, 'Wrong Credentials!'))
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        res
        .cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(validUser)

    } catch (error) {
        next(error);
    }
}