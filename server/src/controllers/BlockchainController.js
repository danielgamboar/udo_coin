//Conecting to Blockchain
const config =  require('../config/config')
let multichain = require('multichain-node')(config.Blockchain)

module.exports = {
    transaction(req, res) {
        console.log(req.body)
        multichain.sendAssetFrom({
            from: req.body.fromAddress,
            to: req.body.toAddress,
            asset: 'Udo',
            comment: req.body.comment,
            qty: req.body.qty,
            'comment-to': req.body.fromwho
        }, (err, txid) => {
            if(err){
                res.send(err)
            }else {
                res.send(txid)
            }
        })
    },
    addresTransactions(req, res) {
        multichain.listAddressTransactions({
            address: req.body.address,
            skip: 0
        }, (err, list) => {
            console.log(list)
            res.send(list)
        })
    },
    addressBalance(req, res) {

        multichain.getAddressBalances({
            address: req.body.address,
            miconf: 0
        }, (err, bal) => {
            if (err) {
                console.log(err)
            }
            res.send(bal)

        })
    },
    async getnewAddress(){ 
        return multichain.getNewAddress()
    }
}
