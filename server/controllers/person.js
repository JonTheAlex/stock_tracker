const Transaction = require('../models/Transaction')
const moment = require('moment')

module.exports = {

    /**
     * GET /
     * PERSON PAGE
     */

    getPerson: async(request, response) => {
        try {
            let transactions = await Transaction.findById(req.params.id)
            response.render('person')
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    }

    //  getPerson: async(request, response) => {
    //     try {
    //         let transactions = await Transaction.findById(req.params.id)
    //         response.render('person', {
    //             title:'Capital.IO', 
    //             moment:moment, 
    //             layout:'./layouts/main', 
    //             transactions, 
    //             loginStatus: request.user
    //         })
    //     } catch (error) {
    //         response.status(500).send({message: error.message})
    //     } 
    // }












}