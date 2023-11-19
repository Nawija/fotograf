import mongoose, { Schema } from "mongoose";

const comSchema = new Schema({
    desc: String,
});

const Com = mongoose.models.Com || mongoose.model("Com", comSchema);

export default Com;
