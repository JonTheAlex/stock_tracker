require('../../config/database')

/**
 * GET /
 * HOMEPAGE
 */

module.exports = {
    getIndex: async(request, response) => {
        try {
            let transactions = ''
            response.render('index', {title:'Homepage', transactions})
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

// /**
//  * GET /
//  * SignIn
//  */

// exports.signin = async(request, response) => {
//     try {
//         response.render('signin')
//     } catch (error) {
//         response.status(500).send({message: error.message})
//     }
// }