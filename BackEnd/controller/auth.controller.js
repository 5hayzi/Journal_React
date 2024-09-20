import User from "../Model/user.model.js";
import bcrypt from 'bcrypt'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'
import multer from 'multer';
import path from 'path';

// Setup multer to store images in a folder called 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to save the images
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Make unique filenames
    },
});

export const upload = multer({ storage: storage });


export const SignUp = async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    
    const { name, email, password, gender, twoFactor } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Check if the image file was uploaded
    const imgPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        img: imgPath, // Save the path in the database, not the actual image
        gender,
        twoFactor,
    });

    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error); // Pass the error to the global error handler
    }
};

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