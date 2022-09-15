const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')

/**
 * App Routes
 */

router.get('/', mainController.getIndex);
router.get('/signin', authController.getSignIn);
router.post('/signin', authController.postSignIn)
router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignup);
router.get('/signout', authController.signOut)
// router.get('/Blog', stockController.blog);
//  router.get('/Newsletter', stockController.newsletter);
//  router.get('/about', stockController.about);

 module.exports = router