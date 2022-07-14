const express = require('express')
const router = express.Router()
const stockController = require('../controllers/stockController')

/**
 * App Routes
 */

 router.get('/', stockController.homepage);

 module.exports = router