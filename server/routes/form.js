const express = require('express')
const router = express.Router()
const formController = require('../controllers/form')

router.get('/', formController.getForm);
router.post('/transaction', formController.createTransaction)
router.post('/asset', formController.createAsset)

module.exports = router

