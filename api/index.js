import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config()
// C9wqjme16DChB8gm
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('fail to conect to database')
})
const app =express();

app.listen(3000, ()=>{
    console.log('server ruinning on 3000');

});

// api routes
app.use('/api/user', userRouter);