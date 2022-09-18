const Person = require('../models/Person')
const moment = require('moment')

module.exports = {

    /**
     * GET /
     * PERSON PAGE
     */

    getPerson: async(request, response) => {
        try {
            const person = await Person.findById(request.params.id)
            response.render('person', { 
                title: 'Capital.IO',  
                layout: './layouts/main',
                person: person,
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    }
}