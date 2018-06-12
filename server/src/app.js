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

//Requests

// get balance from a Address
app.post('/AddressBalance', (req,res)=>{
    console.log(req.body.address)
    multichain.getAddressBalances({
        address: req.body.address,
        miconf: 0
    }, (err,bal)=>{
        if(err){
            console.log(err)
        }
            res.send(bal)
    })
})
//API PORT  
app.listen(process.env.PORT || 8081)
