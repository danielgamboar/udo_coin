//Iniatilize APP
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

//Params of NodeJS Api
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

// mongoose
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Users')

//routesAPI
require('./routes')(app)

//API PORT  
app.listen(config.port)
