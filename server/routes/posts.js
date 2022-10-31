const express = require('express')
const router = express.Router()
const {ensureAuth, ensureAdmin} = require('../../middleware/auth')
const postsController = require('../controllers/posts')

router.get('/', postsController.getBlog);
router.get('/:id', postsController.getPost);
router.post('/createPost', ensureAuth, ensureAdmin, postsController.createPost)

module.exports = router

