const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    position: {
        type: String,
    },
    state: {
        type: String
    },
    district: {
        type: String
    },
    party: {
        type: String
    },
    chamber: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('person', personSchema)