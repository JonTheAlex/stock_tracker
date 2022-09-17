const express = require('express')
const router = express.Router()
const personController = require('../controllers/person')

/**
 * Person Routes
 */

router.get('/:id', personController.getPerson)

