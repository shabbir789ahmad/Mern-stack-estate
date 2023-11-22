import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config()
// C9wqjme16DChB8gm
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('fail to conect to database')
})
const app =express();
app.use(express.json()) // to allow json data
app.listen(3000, ()=>{
    console.log('server ruinning on 3000');

});

// api routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
      return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
        
      });
});