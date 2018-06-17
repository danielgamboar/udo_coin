//Iniatilize APP
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config= require('./config/config')

//Params of NodeJS Api
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())

// TEST
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Users')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(callback){
    console.log('Connection Succeeded')
});

//routesAPI
require('./routes')(app,db)

//API PORT  
app.listen(config.port)
