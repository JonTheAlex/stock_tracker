const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

/**
 * App Routes
 */

 router.get('/', homeController.getIndex);
//  router.get('/Blog', stockController.blog);
//  router.get('/Newsletter', stockController.newsletter);
//  router.get('/about', stockController.about);
//  router.get('/SignIn', stockController.signin);

 module.exports = router