//Conecting to Blockchain
let multichain = require('multichain-node')(require('../config/BlockchainAccess').data)

module.exports={
    transaction (req, res) {
        multichain.sendAssetFrom({
            from: req.body.fromAddress,
            to: req.body.toAddress,
            asset: 'Udo',
            comment: req.body.comment,
            qty : req.body.qty
        }, (err,txid)=> {
            res.send(txid)
        })
    },
    addresTransactions (req, res) {
        multichain.listAddressTransactions({
            address: req.body.address,
            skip: 0
            }, (err,list) => {
                res.send(list)
        })
    },
    addressBalance (req, res){
        multichain.getAddressBalances({
            address: req.body.address,
            miconf: 0
        }, (err,bal)=>{
            if(err){
                console.log(err)
            }
                res.send(bal)
        })
    }
}