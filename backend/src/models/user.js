const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('user', User);