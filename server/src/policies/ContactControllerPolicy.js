const joi = require('joi')

module.exports = {
    Register(req, res, next) {
        const schema = joi.object({
            cedulaContact: joi.number().integer().min(2000000).required(),
            alias: joi.string().regex(/^[a-zA-Z\s]{3,30}$/).required()
        })

        const err = joi.validate({
            cedulaContact: req.body.cedulaContact,
            alias: req.body.alias
        }, schema)
        if (err.error) {
            switch (err.error.details[0].context.key) {
                case 'cedulaContact':
                    res.status(400).send({
                        success: false,
                        message: 'las cedulas son numericas sin caracteres especiales ni letras'
                    })
                    break
                case 'alias':
                res.status(400).send({
                        success: false,
                        message: 'el alias solo puede contener letra'
                    })
                    break
                default:
                    res.status(400).send({
                        success: false,
                        message: 'posee datos invalidos'
                    })
                    break

            }
        } else
            next()
    }
}
