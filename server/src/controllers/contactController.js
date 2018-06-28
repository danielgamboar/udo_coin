var Contact = require('../models/ContactUser')
var Usercontroller = require('./AuthenticationController')
var mongoose = require('mongoose')
var db = mongoose.Connection

module.exports = {

    async register(req, res) {
        var db = req.db

        const contact = await Contact.find({
            $and: [{
                    cedulaUser: req.body.cedulaUser
                },
                {
                    cedulaContact: req.body.cedulaContact
                }
            ]
        }, '', (contact) => contact)
        if (contact.length > 0) {
            res.status(400).send({
                message: 'ya se tiene registrada esta cedula en los contactos'
            })
        } else {
            var existuser = await Usercontroller.existUser(req.body.cedulaContact)
            if (existuser) {
                try {
                    var new_contact = new Contact({
                        cedulaUser: req.body.cedulaUser,
                        cedulaContact: req.body.cedulaContact,
                        alias: req.body.alias
                    })

                    new_contact.save(function (err) {
                        if (err) {
                            res.status(400).send({
                                success: false,
                                message: 'hubo un error almacenando'
                            })
                        } else {
                            res.send({
                                message: 'contacto almacenado exitosamente'
                            })
                        }

                    })
                } catch (error) {
                    res.status(500).send(error)

                }
            } else {
                res.status(400).send({
                    message: 'no hay usuario registrado con esa cedula'
                })

            }
        }
    },
    async list(req, res) {
        try {
            const list = await Contact.find({
                    cedulaUser: req.body.cedulaUser
                },
                '', (contact) => contact)
            res.send(list)
        } catch (err) {
            res.status(400).send({
                message: 'error buscando contactos'
            })
        }
    },
    async delete (req, res) {
        const db= req.db
        Contact.remove({
            _id: req.params.id
        }, (err,contact) => {
            if (err) {
                res.status(400).send(err)
            } else {
              res.send({
                  message: 'completado'
              })
            }

        })
    }
}