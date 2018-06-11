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
// TEST
  app.get('/Wallet', (req, res) => {
    multichain.getAddressBalances({
        address: '1SPhcGdXtjR5mwk5teUHNZ3yrswt8Z2P2NaSiy',
        miconf: 0
    }, (err,bal)=>{
            res.send(bal)
    })  
  })

  //Requests
  
  
app.listen(process.env.PORT || 8081)
