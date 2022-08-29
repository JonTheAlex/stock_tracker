const path = require('path')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const homeRoutes = require('./server/routes/home')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.urlencoded({extended:true}))
app.use('/public', express.static(path.join(__dirname + '/public')))

app.use(expressLayouts)
app.use(cors())

app.set('views', path.join(__dirname, 'views'))
//app.set('layout', './layouts/main')
//app.set('views/layouts', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', homeRoutes)

//PORT = 8000
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
