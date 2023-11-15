import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
    },
});

const Contact =
    mongoose.models.Contact || mongoose.moodel("Contact", contactSchema);

export default Contact;
