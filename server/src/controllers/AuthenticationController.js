//models auth
var User = require('../models/user')
let multichain = require('multichain-node')(require('../config/BlockchainAccess'))

var mongoose= require('mongoose')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('Connection Succeeded')
})

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
                    res.status(400).send({
                        success: false,
                        message: 'usuario duplicado'
                    })
                    
                } else
                res.send({
                    success: true,
                    message: 'user saved succesfully'
                })
            })
        })

    },
    login(req, res) {

    }
}
