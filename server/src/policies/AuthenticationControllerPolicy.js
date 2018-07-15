const joi = require('joi')

module.exports = {
    Register(req, res, next) {
        const schema = joi.object({
            name: joi.string().regex(/^[a-zA-Z]{3,30}$/).required(),
            lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/).required(),
            cedula: joi.number().integer().min(1).required(),
            email: joi.string().email().required(),
            password: joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).required()
        })

        const err = joi.validate(req.body, schema)

        if (err.error) {
            console.log(err.error.details.length)
            switch (err.error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        success: false,
                        message: 'introduzca un correo valido'
                    })
                    break
                case 'lastname':
                    res.status(400).send({
                        success: false,
                        message: 'los apellidos solo deben contener letras'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        success: false,
                        message: 'los nombres solo deben contener letras'
                    })
                    break
                case 'cedula':
                    res.status(400).send({
                        success: false,
                        message: 'las cedulas son numericas sin caracteres especiales ni letras'
                    })
                    break
                case 'password':
                res.status(400).send({
                        success: false,
                        message: 'la contrase;a debe ser de 8 a 20 caracteres y solo puede contener letras y numero'
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
