const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    chamber: {
        type: String,
        required: 'This field is required'
    },
    state: {
        type: String,
        required: 'This field is required'
    },
    district: {
        type: String,
        required: 'This field is required'
    },
    party: {
        type: String,
        required: 'This field is required'
    },
    served: {
        type: String,
        required: 'This field is required'
    }
    
});

module.exports = mongoose.model('Person', personSchema)