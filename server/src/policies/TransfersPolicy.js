const joi = require('joi')

module.exports = {
    transfer(req, res, next) {
        const schema = joi.object({
            cedula: joi.number().integer().min(2000000).required(),
            comment: joi.string().regex(/^[a-zA-Z\s]{3,30}$/).required(),
            qty: joi.number().positive()
        })

        const err = joi.validate({
            cedula: req.body.cedula,
            comment: req.body.comment,
            qty: req.body.qty
        }, schema)
        console.log('entre aqui')
        if (err.error) {
            switch (err.error.details[0].context.key) {
                case 'cedula':
                    res.status(400).send({
                        code: -2,
                        message: 'las cedulas son numericas sin caracteres especiales ni letras'
                    })
                    break
                case 'comment':
                res.status(400).send({
                        code: -2,
                        message: 'concepto invalido'
                    })
                    break
                case 'qty':
                res.status(400).send({
                        code: -2,
                        message: 'monto invalido'
                })
                default:
                    res.status(400).send({
                        code: -3,
                        message: 'posee datos invalidos'
                    })
                    break

            }
        } else
            next()
    }
}
