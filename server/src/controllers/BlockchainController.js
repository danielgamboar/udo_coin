//Conecting to Blockchain
const config =  require('../config/config')
let multichain = require('multichain-node')(config.Blockchain)
var User = require('../models/user')
module.exports = {
    async transaction(req, res) {
        var db= req.db
        const user = await User.find({cedula: req.body.cedula},'cedula Address name lastname',(user) => user)
        if(user.length <= 0){
            res.status(400).send({
                code: -2,
                message: 'cedula no existe o fue eliminada'
            })
        } else {
            const name= user[0].name + ' '+user[0].lastname
            console.log(req.body)
            multichain.sendAssetFrom({
                from: req.body.from,
                to: user[0].Address,
                asset: 'Udo',
                comment: req.body.comment,
                qty: parseFloat(req.body.qty),
                'comment-to': name
            }, (err, txid) => {
                if(err){
                    res.status(500).send({
                        code: -1,
                        message: 'ocurrio un error'
                    })
                }else {
                    res.send({
                        code: 1,
                        message: txid
                    })
                }
            })
        }
    },
    addresTransactions(req, res) {
        multichain.listAddressTransactions({
            address: req.body.address,
            skip: 0
        }, (err, list) => {
            if(!err){
              res.send(list)
            } else {
                res.send(err)
            }
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
    },
    grantPremissions (address) {
            multichain.grant({
                addresses: address,
                permissions: "send,receive"
            })
    }
}
