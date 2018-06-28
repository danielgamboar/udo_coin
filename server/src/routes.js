const AuthenticationController = require('./controllers/AuthenticationController')
const blockchainController = require('./controllers/BlockchainController')
const AuthenticationControllerPolicy= require('./policies/AuthenticationControllerPolicy')
const ContactControllerPolicy= require('./policies/ContactControllerPolicy')
const TransferPolicy = require('./policies/TransfersPolicy')
const ContactController = require('./controllers/contactController')
module.exports = (app) => {
    //AUTH
    app.post('/register', AuthenticationControllerPolicy.Register ,AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    //Transaction between 2 address
    app.post('/Transaction', TransferPolicy.transfer, blockchainController.transaction)

    // get transactions from an Address
    app.post('/AdresssTransactions', blockchainController.addresTransactions)

    // get balance from an Address
    app.post('/AddressBalance', blockchainController.addressBalance)

    //Contacts
    app.post('/regContact',ContactControllerPolicy.Register, ContactController.register)
    app.post('/listContacts',ContactController.list)
    app.delete('/contacts/:id',ContactController.delete)
}
