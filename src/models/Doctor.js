const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    clinic: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        uppercase: true
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Doctor", doctorSchema);
