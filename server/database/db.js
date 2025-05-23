import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("", {
        dbName: "Library management",

    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err =>{
        console.log("error connecting to MongoDB", err);
    })
}