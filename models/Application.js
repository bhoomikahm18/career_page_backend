const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_email: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
    },
    phone_number: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    resume: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    area_of_interest: {
        type: String,
        required: true,
    },
    about_applicant: {
        type: String,
        required: true,
        maxLength: 300,
    },
});

module.exports = mongoose.model("Job Application", jobApplicationSchema);