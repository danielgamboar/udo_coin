//Iniatilize APP
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//Conecting to Blockchain
let multichain = require("multichain-node")(require("../Data/BlockchainAccess").data)
//Params of NodeJS Api
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
console.log("testeo")
// TEST
app.get('/Wallet', (req, res) => {
    multichain.getAddresses((err, addresses) => {

        multichain.createMultiSig({nrequired: 2, keys: addresses}, (err, wallet) => {
           res.send(addresses)
        })
        
    })
  })
//API PORT  
app.listen(process.env.PORT || 8081)
