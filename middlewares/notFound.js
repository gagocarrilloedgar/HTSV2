
/**
 * 404 Standar error handler
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

module.exports = (req, res, next) => {
    res.status(404).end()
}
