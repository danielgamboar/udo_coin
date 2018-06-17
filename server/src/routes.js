const AuthenticationController = require('./controllers/AuthenticationController')
const blockchainController = require('./controllers/BlockchainController')

module.exports = (app) => {
    //Requests

    //Transaction between 2 address
    app.post('/Transaction', blockchainController.transaction)

    // get transactions from an Address
    app.post('/AdresssTransactions', blockchainController.addresTransactions)

    // get balance from an Address
    app.post('/AddressBalance', blockchainController.addressBalance)
    // AUTH
    app.post('/Register', AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
}
