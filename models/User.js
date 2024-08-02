const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    applied: [{type: mongoose.Types.ObjectId, ref: "Job"}]
});

module.exports = mongoose.model("User", userSchema);