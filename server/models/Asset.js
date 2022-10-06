const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    asset_owner: {
        type: String,
    },
    asset_name: {
        type: String,
    },
    asset_ticker: {
        type: String,
    },
    asset_description: {
        type: String,
    },
    asset_value: {
        type: String,
    },
    asset_income_type: {
        type: String,
    },
    asset_income_amount: {
        type: String,
    },
    asset_transaction_type: {
        type: String,
    },
    transaction_date: {
        type: Date,
    },
    notification_date: {
        type: Date,
    },
    amount: {
        type: String,
    }
});

module.exports = mongoose.model('Asset', assetSchema)