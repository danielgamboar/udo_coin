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

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Users');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

//Requests
//TRansaction between 2 address
app.post('/Transaction',(req,res) => {
    multichain.sendAssetFrom({
        from: req.body.fromAddress,
        to: req.body.toAddress,
        asset: 'Udo',
        comment: req.body.comment,
        qty : req.body.qty
    }, (err,txid)=> {
        res.send(txid)
    })
})
// get transactions from an Address
app.post('/AdresssTransactions', (req,res) =>{
    multichain.listAddressTransactions({
        address: req.body.address,
        skip: 0
        }, (err,list) => {
            res.send(list)
        })
    })
// get balance from an Address
app.post('/AddressBalance', (req,res)=>{
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
