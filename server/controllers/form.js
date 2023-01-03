const Transaction = require('../models/Transaction')
const Asset = require('../models/Asset')
const Person = require('../models/Person')

    exports.getForm = (request, response) => {
        try {            
            response.render('form', {
                title: 'Capital.IO',
                layout: './layouts/main',
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        }
    }

    exports.createTransaction = async (request, response) => {
        try {
            await Transaction.create({
                person: request.body.person,
                owner: request.body.owner,
                name: request.body.name,
                ticker: request.body.ticker,
                description: request.body.description,
                type: request.body.type,
                code: request.body.code,
                receipt_date: request.body.receipt_date,
                notification_date: request.body.notification_date,
                amount: request.body.amount
            })
            console.log('Transaction Created')
            response.redirect('/form')
        } catch (error) {
            console.log(error)
            console.log('Transaction Failed')
        }
    }

    exports.createAsset = async (request, response) => {
        try {
            await Asset.create({
                person: request.body.person,
                owner: request.body.owner,
                name: request.body.name,
                ticker: request.body.ticker,
                description: request.body.description,
                value: request.body.value,
                type: request.body.type,
                income_type: request.body.income_type,
                income_amount: request.body.income_amount,
                code: request.body.code,
                receipt_date: request.body.receipt_date,
                notification_date: request.body.notification_date,
                amount: request.body.amount
            })
            console.log('Asset Created')  
            response.redirect('/form')
        } catch (error) {
            console.log(error)
            console.log('Asset Failed')
        }
    }

    exports.getPerson = async (request, response) => {
        try {
            const personData = await Person.find({}, 'name').sort({name:1})
            let dropDown = {
                'persons': personData,
                'updated': Date.now()
            }

            await response.json(dropDown)
            
        } catch (error) {
            console.log(error)
        }
    }