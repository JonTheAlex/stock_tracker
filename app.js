const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
require('dotenv').config()
const PORT = 8000

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

//PORT = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port`)
})
