require('../models/database')

/**
 * GET /
 * HOMEPAGE
 */

exports.homepage = async(request, response) => {
    try {
        response.render('index')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

/**
 * GET /
 * Data
 */

exports.data = async(request, response) => {
    try {
        response.render('data')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

/**
 * GET /
 * News
 */

exports.news = async(request, response) => {
    try {
        response.render('news')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

/**
 * GET /
 * Wiki
 */

exports.wiki = async(request, response) => {
    try {
        response.render('wiki')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

/**
 * GET /
 * About
 */

exports.about = async(request, response) => {
    try {
        response.render('about')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

/**
 * GET /
 * SignIn
 */

exports.signin = async(request, response) => {
    try {
        response.render('signin')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}