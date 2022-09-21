const express = require('express')
const router = express.Router()
const {ensureAuth, ensureAdmin} = require('../../middleware/auth')
const formController = require('../controllers/form')

router.get('/', ensureAuth, ensureAdmin, formController.getForm)

