const joi = require('joi')

module.exports = (req, res, next) => {
    const body = req.body

    const IsformBody = joi.object({
        name: joi.string().min(5).max(30).required(),
        email: joi.string().email().required(),
        senha:joi.string().min(4).max(12).required(),
        
    })

    const formBody = IsformBody.validate(body)

    if(formBody.error) {
            formBody.error.details.map(item => {
            return res.status(400).json(item.message)
        })
        return
    }

    return next()
} 