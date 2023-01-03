const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
    },
    income_source: {
        type: String,
    },
    income_type: {
        type: String,
    },
    income_amount: {
        type: String,
    }
});

module.exports = mongoose.model('income', incomeSchema)