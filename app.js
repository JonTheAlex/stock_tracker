const app = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const PORT = 8000
const dotenv = config()

require('dotenv')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.json())

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', async (request, response) => {
    try {
        response.render('main.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

//PORT = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port`)
})
