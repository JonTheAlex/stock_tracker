module.exports = {
    getBlog: async(request, response) => {

        try {            
            response.render('blog', {
                title:'Capital.IO', 
                layout:'./layouts/main', 
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        } 
    }
}