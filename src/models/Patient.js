const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    clinic: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        uppercase: true,
    },
    zip: {
        type: String,
        required: true,
    },
    first_visit: {
        type: Date,
    },
    last_visit: {
        type: Date,
    },
    doctor: {
        type: Number,
        required: true,
        default: -1,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Patient", patientSchema);
