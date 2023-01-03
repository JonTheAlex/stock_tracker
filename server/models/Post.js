const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    image: {
        type: String,
    },
    post_date: {
        type: Date,
    },
    posted_by: {
        type: String,
    },
    content: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post', postSchema)