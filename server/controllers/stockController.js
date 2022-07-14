require('../models/database')

/**
 * GET /
 * HOMEPAGE
 */

exports.homepage = async(request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}