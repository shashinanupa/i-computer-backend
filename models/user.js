import mongoose from "mongoose";

const userSchema = new mongoose.Schema({



    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    } ,
    isAdmin:{
        required:true,
        type:Boolean,
        default:false
    },
    isEmailVerified:{
        type:Boolean,
        required:true,
        default:false
    },
    image:{
        type:String,
        required:true,
        default:"/default-profile-picture.png"
    },
    isBlocked:{
        type:Boolean,
        required:true,
        default:false
    }
}
)


const user = mongoose.model('User', userSchema)
export default user