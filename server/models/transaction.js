const mongoose = require('mongoose');

const transcationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    status: {
        type: String,
        required: 'This field is required'
    },
    state_district: {
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