const joi = require('joi');

module.exports = (req, res, next) => {
    const id = req.params;

    const joiId = joi.object({
        id: joi.number().required()
    });

    const verifyIdView = joiId.validate(id)

    if(verifyIdView.error) {
        const datailsMessage = verifyIdView.error.details.map(item => {
            return item.message
        })

        return res.status(400).send(
            datailsMessage
        )
    }

    return next()
};