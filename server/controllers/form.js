    /**
     * GET /
     * FORM SUBMISSION PAGE
     */

    exports.getForm = (request, response) => {
        try {
            response.render('form', {
                title: 'Capital.IO',
                layout: './layouts/main',
                loginStatus: request.user
            })
        } catch (error) {
            response.status(500).send({message: error.message})
        }
    }