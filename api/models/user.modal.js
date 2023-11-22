import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({
    username : {
        type:'string',
        required:true,
        unique:true
    },
    email : {
        type:'string',
        required:true,
        unique:true
    },
    password : {
        type:'string',
        required:true,
    },
    avatar : {
        type:'string',
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0ugJ6xA2vaahNZowAP_K77&ust=1700746890003000&source=images&cd=vfe&ved=0CBMQjhxqFwoTCOCMuYPe14IDFQAAAAAdAAAAABAE",
    },

},{timestamps:true});

const User = mongoose.model('User', userSchema)
export default User;