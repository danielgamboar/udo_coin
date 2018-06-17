var mongoose = require('mongoose')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
    console.log('Connection Succeeded')
});


module.exports = {

    register(req, res) {
        res.send({
            msg: 'prueba'
        })
    },
    login(req, res) {

    }
}
