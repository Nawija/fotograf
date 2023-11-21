import mongoose, { Schema } from "mongoose";

const passwordSchema = new Schema({
    pass: String,
    setPass: String,
});

const Password = mongoose.models.Password || mongoose.model("Password", passwordSchema);

export default Password;
