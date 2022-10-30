const Post = require('../models/Post')


module.exports = {
    getBlog: async(request, response) => {
        const posts = await Post.find()
        try {            
            response.render('blog', {
                title:'Capital.IO', 
                layout:'./layouts/main', 
                loginStatus: request.user,
                posts: posts
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    },

    getPost: async(request, response) => {
        const post = await Post.findById(request.params.id)

        try {
            response.render('post', {
                title: 'Capital.IO',
                layout: './layouts/main',
                moment:moment,
                loginStatus: request.user,
                post:post,
                
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    },

    createPost: async(request, response) => {
        
    }
}