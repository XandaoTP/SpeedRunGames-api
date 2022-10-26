module.exports = class AllError extends Error {

    constructor(message, resCode) {

        super(message);
        this.resCode = resCode;

    }

}