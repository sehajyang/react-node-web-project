const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
    title: String,
    location: String,
    body: String,
    tags: [String],
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Post', Post);