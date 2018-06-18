const AuthenticationController = require('./controllers/AuthenticationController')
const blockchainController = require('./controllers/BlockchainController')
var mongoose= require('mongoose')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('Connection Succeeded')
})

module.exports = (app) => {
    //Requests

    //Transaction between 2 address
    app.post('/Transaction', blockchainController.transaction)

    // get transactions from an Address
    app.post('/AdresssTransactions', blockchainController.addresTransactions)

    // get balance from an Address
    app.post('/AddressBalance', blockchainController.addressBalance)
    // AUTH
    app.post('/register', AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
}
