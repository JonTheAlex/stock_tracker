module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()){
            return next()
        } else {
            res.redirect('/')
        }
    },

    ensureAdmin: function (req, res, next){
        if (req.isAuthenticated() && (req.user.admin === True) && (req.user.id === process.env.ADMIN)) {
            return next()
        } else {
            res.redirect('/')
        }
    }
}