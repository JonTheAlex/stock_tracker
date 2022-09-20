const Transaction = require('../models/Transaction')
const Person = require('../models/Person')
const moment = require('moment')


module.exports = {
    
    /**
     * GET /
     * HOMEPAGE
     */

    getIndex: async(request, response) => {
        const transactions = await Transaction.find().populate({path: 'person', select: '_id', select: 'name'})

        try {            
            response.render('index', {
                title:'Capital.IO', 
                moment:moment, 
                layout:'./layouts/main', 
                transactions:transactions, 
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    }
}

// /**
//  * GET /
//  * Blog
//  */

// exports.blog = async(request, response) => {
//     try {
//         response.render('blog')
//     } catch (error) {
//         response.status(500).send({message: error.message})
//     }
// }

// /**
//  * GET /
//  * Newsletter
//  */

// exports.newsletter = async(request, response) => {
//     try {
//         response.render('newsletter')
//     } catch (error) {
//         response.status(500).send({message: error.message})
//     }
// }

// /**
//  * GET /
//  * About
//  */

// exports.about = async(request, response) => {
//     try {
//         response.render('about')
//     } catch (error) {
//         response.status(500).send({message: error.message})
//     }
// }
