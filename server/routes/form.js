const express = require('express')
const router = express.Router()
const {ensureAuth, ensureAdmin} = require('../../middleware/auth')
const formController = require('../controllers/form')
const postsController = require('../controllers/posts')

router.get('/', formController.getForm);
router.post('/transaction', formController.createTransaction)
router.post('/asset', formController.createAsset)
router.post('/post', postsController.createPost)
router.get('/data', formController.getPerson)

module.exports = router

