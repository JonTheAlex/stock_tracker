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
     * Homepage
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

    postNewsletter: async(request, response) => {
        const validationErrors = []
        
        if (!validator.isEmail(request.body.email)) validationErrors.push({msg: 'Please enter a valid email address.'})

        if (validationErrors.length){
            request.flash('errors', validationErrors)
            return response.redirect('/')
        } else {
                request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })
  
            try{
                const email = await Newsletter.find({email: request.body.email})
                console.log(email)
                if (email.length === 0) {
                    await Newsletter.create({
                        email: request.body.email
                    })
                    console.log('Email added to Newsletter')
                    response.send({status:201})
                } else {
                    console.log('Email exists in Newsletter')
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