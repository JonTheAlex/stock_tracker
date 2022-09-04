const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const expressLayouts = require('express-ejs-layouts')
const mainRoutes = require('./server/routes/main')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname + '/public')))
//app.set('layout', './layouts/main')
//app.set('views/layouts', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:true}))

//Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)

//PORT = 8000
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
