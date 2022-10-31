const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    post_date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    posted_by: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema)