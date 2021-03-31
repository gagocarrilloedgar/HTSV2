
const catchAsync = require("../helpers/catchAsync");
const csv = require("csvtojson");

/**
 * Returns all the data inside the DB
 * @param {*} req --> request body object
 * @param {*} res --> response body object
 */
exports.findAll = (Model) => catchAsync(async (req, res, next) => {

    const data = await Model.find();
    res.status(200).json(data);

});

exports.find = (Model) => catchAsync(async (req, res) => {

    const data = await Model.findById(req.params.id);
    res.status(200).json(data);

});


exports.add = (Model) => catchAsync(async (req, res) => {

    const data = await Model.create(req.body);
    res.status(200).json(data);

});


exports.addList = (Model) => catchAsync(async (req, res) => {

    const datas = await Model.insertMany(req.body)
    res.status(200).json(datas);

});


exports.update = (Model) => catchAsync(async (req, res) => {

    const data = await Model.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json(data);

});


exports.delete = (Model) => catchAsync(async (req, res) => {

    await Model.findOneAndDelete({ _id: req.params.id }, req.body)
    res.status(200).json({ message: "Model deleted correctly" })

});







