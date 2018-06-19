const AuthenticationController = require('./controllers/AuthenticationController')
const blockchainController = require('./controllers/BlockchainController')
const AuthenticationControllerPolicy= require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    //AUTH
    app.post('/register', AuthenticationControllerPolicy.Register ,AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    //Transaction between 2 address
    app.post('/Transaction', blockchainController.transaction)

    // get transactions from an Address
    app.post('/AdresssTransactions', blockchainController.addresTransactions)

    // get balance from an Address
    app.post('/AddressBalance', blockchainController.addressBalance)
}
