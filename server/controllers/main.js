const flash = require('express-flash')
const validator = require('validator')
const Transaction = require('../models/Transaction')
const Asset = require('../models/Asset')
const Email = require('../models/Email')
const Person = require('../models/Person')
const moment = require('moment')



module.exports = {
    
    /**
     * GET /
     * Homepage
     */

    getIndex: async(request, response) => {
        const transactions = await Transaction.find().sort({'receipt_date': -1}).limit(100).populate({path: 'person', select: '_id name state district'})
        const assets = await Asset.find().sort({'receipt_date': -1}).limit(100).populate({path: 'person', select: '_id name'})
        try {            
            response.render('index', {
                title:'Capital.IO', 
                moment:moment, 
                layout:'./layouts/main', 
                recordData: {},
                transactions:transactions, 
                assets: assets,
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    },

    /**
     * GET /
     * About
     */

    getAbout: async(request, response) => {
        try {
            response.render('about', {
                title:'Capital.IO',
                layout:'./layouts/main',
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    },

    // /**
    //  * POST /
    //  * Newsletter
    //  */

    postEmail: async(request, response) => {
        const validationErrors = []
        
        if (!validator.isEmail(request.body.email)){validationErrors.push({msg: 'Please enter a valid email address.'})}

        if (validationErrors.length){
            return response.send({status:400})
        } else {
                request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })
            try{
                const email = await Email.find({email: request.body.email})
                console.log(email)
                if (email.length === 0) {
                    await Email.create({
                        email: request.body.email
                    })
                    console.log('Email added to Newsletter')
                    response.send({status:201})
                } else {
                    console.log('Email failed to add to Newsletter')
                    response.send({status:405})
                }
                
            } catch (error){
                console.log(error)
                console.log('Email failed to add to Newsletter')
                response.send({status:400})
            }   
        } 
    }
}