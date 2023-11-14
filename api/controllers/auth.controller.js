import User from '../models/user.modal.js'
import {errorHandler} from '../utils/error.js'
import bcryptjs from 'bcryptjs';



export const SignUp=async (req, res, next) =>{
   const {username, email, password} =  req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
   const newUser = new User({username, email, password: hashedPassword});
   try{
        await newUser.save();
        res.status(201).json('User created successfully!');
   }catch(error)
   {
        next(error)
   }
}


export const LogIn=async (req, res, next) =>{
     const { email, password} =  req.body;
     //  const hashedPassword = bcryptjs.hashSync(password, 10);
     try{
          const validUser=await User.findOne({email:email});
          if(!validUser) return next(errorHandler(404, "User not found!"))
          // res.status(201).json('User created successfully!');
     }catch(error)
     {
          next(error)
     }
  }

  export const LogOut=async (req, res, next) =>{
     const { email, password} =  req.body;
     //  const hashedPassword = bcryptjs.hashSync(password, 10);
     try{
          const validUser=await User.findOne({email:email});
          if(!validUser) return next(errorHandler(404, "User not found!"))
          // res.status(201).json('User created successfully!');
     }catch(error)
     {
          next(error)
     }
  }
