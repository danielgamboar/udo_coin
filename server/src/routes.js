const AuthenticationController= require('./controllers/AuthenticationController')
const blockchainController = require ('./controllers/BlockchainController')

module.exports= (app,moongose) => {
//Requests

//Transaction between 2 address
app.post('/Transaction',blockchainController.transaction)

// get transactions from an Address
app.post('/AdresssTransactions', blockchainController.addresTransactions)

// get balance from an Address
app.post('/AddressBalance', blockchainController.addressBalance)

}