const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

/**
     * GET /
     * SignIn
**/

exports.getSignin = (request, response) => {
    try {
        response.render('signin', { layout:'./layouts/signin'})
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

exports.postSignin = (request, response, next) => {
    const validationErrors = []
    if(!validator.isEmail(request.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if(validator.isEmpty(request.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })

    if (validationErrors.length) {
        request.flash('errors', validationErrors)
        return response.redirect('signin', { layout:'./layouts/signin' })
    }
    request.body.email = validator.normalizeEmail(request.body.email, { gmail_remove_dots: false })

    paspport.authenticate('local', (err, user, info) => {
        if (err) { return next(err) }
        if (!user) {
            request.flash('errors', info)
            return response.redirect('signin', './layouts/login')
        }
        request.login(user, (err) => {
            if (err) { return next(err) }
            request.flash('success', { msg: 'Success! You are logged in.' })
            response.redirect(request.session.returnTo || '/transactions')
        })
    })(request, response, next)
}

exports.signOut = (request, response) => {
    request.logout(() => {
        console.log('User has logged out.')
    })
    request.session.destroy((err) => {
        if (err) console.log('Error : Failed to destroy the session during logout.', err)
        request.user = null
        response.redirect('/')
    })
}

exports.getSignup = (request, response) => {
    if (request.user) {
        return response.redirect('/transactions')
    }
    response.render('signup', {
        title: 'Create Account'
    })
}

exports.postSignup = (request, response, next) => {
    const validationErrors = []
    if (!validator.isEmail(request.body.password)) validationErrors.push({ msg: 'Please enter a valuid email address.' })
    if (!validator.isLength(request.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (request.body.password !== request.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

    if (validationErrors.length){
        request.flash('errors', validationErrors)
        return response.redirect('../signup')
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
            return response.redirect('../signup')
        }
        user.save((err) => {
            if (err) { return next(err) }
            request.login(user, (err) => {
                if (err) {
                    return next(err)
                }
                response.redirect('/transactions')
            })
        })
    })
}