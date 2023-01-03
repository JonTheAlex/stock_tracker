const mongoose = require('mongoose');

const liabilitySchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    liability_creditor: {
        type: String,
    },
    liability_date: {
        type: String,
    },
    liability_type: {
        type: String,
    },
    liability_amount: {
        type: String,
    },
});

module.exports = mongoose.model('Liability', liabilitySchema)