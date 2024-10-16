import User from '../models/auth.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/asyncHandler.js';

// signup user
const signupUser = asyncHandler(async (req, res) => {
    try {
        const { username, email, password ,confirmPassword} = req.body;
        console.log(req.body)
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password must be same"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }   

       
        const user = await User.create({ username, email, password});
        const token = user.generateJWT();
        

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message
        });
    }
});

// login user
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"  
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"       
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid password" 
            });
        }

        const token = user.generateJWT();

        res.status(200).json({
            success: true,
            message: "User logged in successfully",     
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error logging in user",
            error: error.message
        }); 
    }
})  ;

export  {
    signupUser,
    loginUser
};




