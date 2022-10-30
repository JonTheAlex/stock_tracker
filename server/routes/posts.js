const express = require('express')
const router = express.Router()
const {ensureAuth, ensureAdmin} = require('../../middleware/auth')
const postsController = require('../controllers/post')

router.get('/blog', postsController.getBlog);
router.get('/blog/:id', postsController.getPost);
router.post('/blog/createPost', ensureAuth, ensureAdmin, postsController.createPost)

module.exports = router

