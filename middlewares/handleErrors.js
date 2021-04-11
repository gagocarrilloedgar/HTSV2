
/**
 * Not exactly a middleware but a controller where all the error die
 * if they haven't found where to go. This is a controlled way of having the
 * standarized errors
 * @param {*} error Passed error
 * @param {*} req Req from the call
 * @param {*} res Res 
 * @param {*} next Middleware hanbdler
 */

module.exports = (error, req, res, next) => {

    if (error.name === "CastError") {
        res.status(404).end();
    } else if (error.name === "ValidationError") {
        res.status(400).end();
    } else {
        res.status(500).end();
    }
}