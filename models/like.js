import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema({
    like: Boolean,
    photoId: String,
    url: String,
    pass: String,
    setPass: String,
});

const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);

export default Like;
