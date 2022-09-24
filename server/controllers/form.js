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
            const personObjID = await Person.find(req.body.person)

            await Transaction.create({
                person: personObjID,
                state: req.body.state,
                district: req.body.district,
                asset_name: req.body.asset_name,
                asset_ticker: req.body.asset_ticker,
                asset_description: req.body.asset_description,
                asset_type: req.body.asset_type,
                transaction_type: req.body.transaction_type,
                transaction_date: req.body.transaction_date,
                notification_date: req.body.notification_date,
                amount: req.body.amount
            })            
        } catch (error) {
            console.log(error)
        }
    }

    exports.createAsset = async (request, response) => {
        try {
            const personObjID = await Person.find(req.body.person)

            await Asset.create({
              person: personObjID,
              asset: req.body.asset,
              asset_owner: req.body.asset_owner,
              asset_income_type: req.body.asset_income_type,
              asset_income: req.body.asset_income,
              taxable_asset: req.body.taxable_asset,
              income_source: req.body.income_source,
              transaction_date: req.body.transaction_date,
              notification_date: req.body.notification_date,
              amount: req.body.amount
            })            
        } catch (error) {
            console.log(error)
        }
    }