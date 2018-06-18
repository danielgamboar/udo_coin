//models auth
var User = require('../models/user')
let multichain = require('multichain-node')(require('../config/BlockchainAccess'))

module.exports = {

    async register(req, res) {

        multichain.getNewAddress((err, adress) => {
            var db = req.db
            var new_user = new User({
                name: req.body.name,
                lastname: req.body.lastname,
                Address: adress,
                email: req.body.email,
                password: req.body.password,
                cedula: req.body.cedula

            })
            new_user.save(function (error) {
                if (error) {
                    res.send({
                        success: false,
                        message: 'usuario duplicado'
                    })
                }
                res.send({
                    success: true,
                    message: 'user safe succesfully'
                })
            })
        })

    },
    login(req, res) {

    }
}
