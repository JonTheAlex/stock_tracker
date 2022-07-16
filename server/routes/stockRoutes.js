const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stockController')

/**
 * App Routes
 */

 router.get('/', stockController.homepage);
 router.get('/Data', stockController.data);
 router.get('/News', stockController.news);
 router.get('/wiki', stockController.wiki);
 router.get('/about', stockController.about);
 router.get('/SignIn', stockController.signin);

 module.exports = router