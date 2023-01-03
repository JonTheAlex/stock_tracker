const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    position_position: {
        type: String,
    },
    position_organization: {
        type: String,
    },
    
});

module.exports = mongoose.model('position', positionSchema)