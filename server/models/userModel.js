import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password:{
        type: String,
        required: true,
        select: false, // Do not return password by default
    },

    role:{
        type: String,
        enum: ["Admin","User"], //enum is used to define a set of allowed values
        default: "User", 
    },

    accountVerified: {
        type: Boolean,
        default: false,
    },

    borrowedBooks:[{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Borrow"
        },
        returned: {
            type: Boolean,
            default: false,
        },
        bookTitle: String,
        borrowedDate: Date,
        dueDate: Date,
        },
    ],
    avatar: {
        public_id: String,
        url:String,

    },

    verificationCode:Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},
{
    timestamps:true,
});

export const User = mongoose.model("User", userSchema);
