const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
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
    value: {
        type: String,
    },
    type: {
        type: String,
    },
    income_type: {
        type: String,
    },
    income_amount: {
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

module.exports = mongoose.model('asset', assetSchema)