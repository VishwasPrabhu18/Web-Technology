import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to database", error);
    }
}

export default connection;