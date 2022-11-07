const flash = require('express-flash')
const validator = require('validator')
const Transaction = require('../models/Transaction')
const Asset = require('../models/Asset')
const Newsletter = require('../models/Newsletter')
const Person = require('../models/Person')
const moment = require('moment')



module.exports = {
    
    /**
     * GET /
     * HOMEPAGE
     */

    getIndex: async(request, response) => {
        const transactions = await Transaction.find().populate({path: 'person', select: '_id name state district'})
        const assets = await Asset.find().populate({path: 'person', select: '_id name'})
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
     * HOMEPAGE
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
    //  * GET /
    //  * Newsletter
    //  */

    postNewsletter: async(request, response) => {
        console.log(request.body.email)
        const validationErrors = []
        
        if (!validator.isEmail(request.body.email)) validationErrors.push({msg: 'Please enter a valid email address.'})

        if (validationErrors.length){
            request.flash('errors', validationErrors)
            return response.redirect('/')
        } else {
            
            try{
                request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })

                await Newsletter.create({
                    email: request.body.email
                })
                console.log('Email added to Newsletter')
                response.redirect('/')
            } catch (error){
                console.log(error)
                console.log('Email not added to Newsletter')
                response.redirect('/')
            }   
        } 
    }
}