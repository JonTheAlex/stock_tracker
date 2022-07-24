const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stockController')

/**
 * App Routes
 */

 router.get('/', stockController.homepage);
 router.get('/Blog', stockController.blog);
 router.get('/Newsletter', stockController.newsletter);
 router.get('/about', stockController.about);
 router.get('/SignIn', stockController.signin);

 module.exports = router