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
        try {
            await Post.create({
                title: request.body.title,
                image: request.body.image,
                post_date: request.body.post_date,
                user: request.body.user,
                content: request.body.content
            })
            console.log('Post Created')
            response.redirect('/form')
        } catch (error) {
            console.log(error)
            console.log('Post Creation Failed')
        }
    }
}