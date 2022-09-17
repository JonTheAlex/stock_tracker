const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type: String,
        required: 'This field is required'
    }
})

// const personSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: 'This field is required'
//     },
//     chamber: {
//         type: String,
//         enum: ['Senate', 'House'],
//         required: 'This field is required'
//     },
//     state: {
//         type: String,
//         enum: ['AL','AK','AZ','AR','CA','CO','CT',
//         'DE','FL','GA','HI','ID','IL','IN','IA','KS',
//         'KY','LA','ME','MD','MA','MI','MN','MS','MO',
//         'MT','NE','NV','NH','NJ','NM','NY','NC','ND',
//         'OH','OK','OR','PA','RI','SC','SD','TN','TX',
//         'UT','VT','VA','WA','WV','WI','WY'],
//         required: 'This field is required'
//     },
//     district: {
//         type: String,
//         required: 'This field is required'
//     },
//     party: {
//         type: String,
//         enum: ['Republican', 'Democrat'],
//         required: 'This field is required'
//     },
//     served: {
//         type: String,
//         required: 'This field is required'
//     }
// });

module.exports = mongoose.model('Person', personSchema)