import mongoose, { Schema } from "mongoose";

const likePhotoSchema = new Schema({
    newClickedArray: {
        type: Boolean,
    },
});

const LikePhoto =
    mongoose.models.LikePhoto || mongoose.moodel("LikePhoto", likePhotoSchema);

export default LikePhoto;
