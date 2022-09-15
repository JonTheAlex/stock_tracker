const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

/**
     * GET /
     * SignIn
**/

exports.getSignIn = (request, response) => {
    try {
        response.render('signin', {title: 'Login', layout:'./layouts/signin'})
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

exports.postSignIn = (request, response, next) => {
    const validationErrors = []
    if(!validator.isEmail(request.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if(validator.isEmpty(request.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

    if (validationErrors.length) {
        request.flash('errors', validationErrors)
        return response.redirect('signup', { layout:'./layouts/signin' })
    }
    request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })

    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err) }
        if (!user) {
            request.flash('errors', info)
            return response.redirect('signin', { layout:'./layouts/signin' })
        }
        request.login(user, (err) => {
            if (err) { return next(err) }
            request.flash('success', { msg: 'Success! You are logged in.' })
            response.redirect(request.session.returnTo || '/')
        })
    })(request, response, next)
}

exports.signOut = (request, response) => {
    request.logout(() => {
        console.log('User has logged out.')
        response.redirect('/')
    })
    request.session.destroy((err) => {
        if (err) console.log('Error : Failed to destroy the session during logout.', err)
        request.user = null
        response.redirect('/')
    })
}

exports.getSignUp = (request, response) => {
    if (request.user) {
        return response.redirect('/')
    }
    try {
        response.render('signup', {title: 'Create Account', layout: './layouts/signin' })
    } catch (error) {
        response.status(500).send({ message: error.message })
    }    
}

exports.postSignup = (request, response, next) => {
    const validationErrors = []
    if (!validator.isEmail(request.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (!validator.isLength(request.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (request.body.password !== request.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

    if (validationErrors.length){
        request.flash('errors', validationErrors)
        console.log(validationErrors)
        return response.redirect('/')
    }
    request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })

    const user = new User({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password
    })

    User.findOne({$or: [
        { email: request.body.email },
        { userName: request.body.userName },
    ]}, (err, existingUser) => {
        if (err) { return next(err) }
        if (existingUser) {
            request.flash('errors', { msg: 'Account with that email address or username already exists.' })
            return response.redirect('signin')
        }
        user.save((err) => {
            if (err) { return next(err) }
            request.login(user, (err) => {
                if (err) {
                    return next(err)
                }
                response.redirect('/')
            })
        })
    })
}