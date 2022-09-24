const express = require('express')
const router = express.Router()
const {ensureAuth, ensureAdmin} = require('../../middleware/auth')
const formController = require('../controllers/form')

router.get('/', formController.getForm);
router.post('/transaction', formController.createTransaction)
router.post('/asset', formController.createAsset)

module.exports = router

