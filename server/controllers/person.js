const Person = require('../models/person')
const moment = require('moment')
const Transaction = require('../models/transaction')
const Asset = require('../models/Asset')

module.exports = {

    /**
     * GET /
     * PERSON PAGE
     */

    getPerson: async(request, response) => {
        try {
            const person = await Person.findById(request.params.id)
            const transactions = await Transaction.find({person: request.params.id})
            const assets = await Asset.find({person: request.params.id})

            response.render('person', { 
                title: 'Capital.IO',  
                layout: './layouts/main',
                moment:moment,
                person:person,
                transactions:transactions,
                assets: assets,
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    }
}