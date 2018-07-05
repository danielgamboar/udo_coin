//models auth
var User = require('../models/user')
const config =  require('../config/config')
const blockchainController= require('./BlockchainController')
const jwt= require('jsonwebtoken')
//mongoose connection
var mongoose= require('mongoose')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('Connection Succeeded')
})

//JWT

 function singUser (user){
     const HALF_HOUR= 60 * 30
     return jwt.sign(user, config.authentication.jwtSecret,{
         expiresIn: HALF_HOUR
     })
 }

module.exports = {

    async register(req, res) {
        var db = req.db
        const user= await User.find({$or: [{cedula: req.body.cedula},{email: req.body.email}]},'cedula',(user) => user)
            if(user.length > 0){
                console.log(user)
                res.status(403).send({
                    error: 'usuario duplicado'
                })
            } else {
                try{
                const address = await blockchainController.getnewAddress()
                blockchainController.grantPremissions(address)
                var new_user = new User({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    Address: address,
                    email: req.body.email,
                    password: req.body.password,
                    cedula: req.body.cedula

                })
            
                new_user.save(function (error) {
                    if (error) {
                        res.status(400).send({
                            success: false,
                            message: 'error duplicado'
                        })
                        
                    } else
                    res.send({
                        success: true,
                        message: 'usuario almacenado'
                    })
                })
                } catch (err){
                    console.log(err)
                }
                
            }
    },
    async login(req, res) {
        var db=req.db
        try{
            User.find({cedula : req.body.cedula},'password Address name lastname cedula', (err,user) => {
                if (!user.length)
                {
                    res.status(403).send({
                        error: 'cedula no encontrada'
                    })
                }else {
                    user[0].comparePassword(req.body.password, (err,isMatch) =>{
                        if (isMatch){
                        res.send({
                            user: user[0],
                            token: singUser(JSON.parse(JSON.stringify(user[0])))
                        })}
                        else res.status(403).send({
                            error: 'password incorrecto'
                        })
                    })

                }
                
            })
        }catch (err) {
            res.status(500).send({
                error: 'un error ha ocurrido durante el login'
            })
        }
        

    },
    async existUser ( cedula ) {
        const user = await User.find({cedula: cedula},'cedula',(user) => user)
          return user.length !== 0
    },
    async findUser (cedula) {
        const user = await User.find({cedula: cedula},'cedula Address name lastname',(user) => user)
          return user
    }
}
