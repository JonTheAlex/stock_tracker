const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
require('dotenv').config()
const PORT = 8000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(expressLayouts)
app.use(cors())


app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/stockRoutes.js')
app.use('/', routes)

//PORT = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
