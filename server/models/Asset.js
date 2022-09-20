const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    asset: {
        type: String,
    },
    asset_owner: {
        type: String,
    },
    asset_income_type: {
        type: String,
    },
    asset_income: {
        type: String,
    },
    asset_taxable: {
        type: Boolean,
    },
    income_source: {
        type: String,
    },
    income_type: {
        type: String,
    },
    income_amount: {
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