const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    posted_on: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model("Job", jobSchema);