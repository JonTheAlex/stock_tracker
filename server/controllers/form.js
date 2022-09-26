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
                person: request.body.personTransaction,
                owner: request.body.asset_owner,
                asset_name: request.body.asset_name,
                asset_ticker: request.body.asset_ticker,
                asset_description: request.body.asset_description,
                asset_type: request.body.asset_type,
                transaction_type: request.body.transaction_type,
                transaction_date: request.body.transaction_date,
                notification_date: request.body.notification_transaction_date,
                amount: request.body.amountTransaction
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
              person: request.body.personAsset,
              asset_name: request.body.asset_name,
              asset_description: request.body.asset_description,
              asset_owner: request.body.asset_owner,
              asset_value: request.body.asset_value,
              asset_income_type: request.body.asset_income_type,
              asset_income_amount: request.body.asset_income_amount,
              asset_transaction_type: request.body.asset_transaction_type,
              transaction_date: request.body.transaction_asset_date,
              notification_date: request.body.notification_asset_date,
              amount: request.body.amountAsset
            })
            console.log('Asset Created')  
            response.redirect('/form')
        } catch (error) {
            console.log(error)
            console.log('Asset Failed')
        }
    }

    exports.getData = async (request, response) => {
        try {
            const personData = await Person.find({}, 'name')
            let dropDown = {
                'persons': personData,
                'updated': Date.now()
            }

            await response.json(dropDown)
            
        } catch (error) {
            console.log(error)
        }
    }