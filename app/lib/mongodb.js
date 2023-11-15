import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log(`DB connected`);
        }
    } catch (error) {
        console.log(`error db not connected`);
    }
};

export default connectDB;
