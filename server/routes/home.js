const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

/**
 * App Routes
 */

router.get('/', homeController.getIndex);
router.get('/signin', homeController.getSignin);
//  router.get('/Blog', stockController.blog);
//  router.get('/Newsletter', stockController.newsletter);
//  router.get('/about', stockController.about);

 module.exports = router