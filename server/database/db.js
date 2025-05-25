import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Library Management",

    }).then(() => {
        console.log("database connected successfully");
    }).catch(err =>{
        console.log("error connecting to database", err);
    })
}