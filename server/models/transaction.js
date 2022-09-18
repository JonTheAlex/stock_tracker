const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    state: {
        type: String,
        required: 'This field is required'
    },
    district: {
        type: String,
        required: 'This field is required'
    },
    owner: {
        type: String,
        required: 'This field is required'
    },
    asset_name: {
        type: String,
        required: 'This field is required'
    },
    asset_ticker: {
        type: String,
        required: 'This field is required'
    },
    asset_description: {
        type: String,
        required: 'This field is required'
    },
    asset_type: {
        type: String,
        required: 'This field is required'
    },
    transaction_type: {
        type: String,
        required: 'This field is required'
    },
    transaction_date: {
        type: Date,
        required: 'This field is required'
    },
    notification_date: {
        type: Date,
        required: 'This field is required'
    },
    amount: {
        type: String,
        required: 'This field is required'
    }
});

module.exports = mongoose.model('Transaction', transactionSchema)