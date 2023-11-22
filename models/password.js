import mongoose, { Schema } from "mongoose";

const passwordSchema = new Schema({
    pass: String,
    fetchDate: String,
});

const Password = mongoose.models.Password || mongoose.model("Password", passwordSchema);

export default Password;
