import User from "../Model/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export const upload = multer({ storage: storage });

export const SignUp = async (req, res, next) => {
  const { name, email, password, gender, twoFactor } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    img: imgPath,
    gender,
    twoFactor,
  });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const LogIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found!"));
    const validPasswrord = bcrypt.compareSync(password, validUser.password);
    if (!validPasswrord) return next(errorHandler(401, "Wrong Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};

export const DeleteUser = async (req, res) => {
  const { userId } = req.query;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json(`${userId} deleted`);
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};
