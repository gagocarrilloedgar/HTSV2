module.exports = (error, req, res, next) => {
    console.log(error);

    if (error.name === "CastError") {
        res.status(404).end();
    } else if (error.name === "ValidationError") {
        res.status(400).end();
    } else {
        res.status(500).end();
    }
}