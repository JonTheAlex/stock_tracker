const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')
const personController = require('../controllers/person')
const postsController = require('../controllers/posts')

/**
 * App Routes
*/

router.get('/', mainController.getIndex);
router.get('/blog', postsController.getBlog)
router.get('/about', mainController.getAbout);
router.get('/signin', authController.getSignIn);
router.post('/signin', authController.postSignIn)
// router.get('/signup', authController.getSignUp);
// router.post('/signup', authController.postSignup);
router.get('/signout', authController.signOut)
router.get('/person/:id', personController.getPerson)
router.post('/newsletter', mainController.postEmail)
module.exports = router