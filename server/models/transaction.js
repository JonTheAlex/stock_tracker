const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    owner: {
        type: String,
    },
    name: {
        type: String,
    },
    ticker: {
        type: String,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    code: {
        type: String,
    },
    receipt_date: {
        type: Date,
    },
    notification_date: {
        type: Date,
    },
    amount: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema)