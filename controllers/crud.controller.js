
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

/**
 * Finds an object and returns the data associated Using
 * the _id property
 * @param {*} Model MongoDB model
 * @returns 
 */
exports.find = (Model) => catchAsync(async (req, res) => {

    const data = await Model.findById(req.params.id);
    res.status(200).json(data);

});

/**
 * Adds an object with the Model shchema to the MongoDB
 * @param {*} Model MongoDB model
 * @returns 
 */
exports.add = (Model) => catchAsync(async (req, res) => {

    const data = await Model.create(req.body);
    res.status(200).json(data);

});

/**
 * Adds a list to the MongoDB. It only acceps reduced amounts of data
 * ToDo: implement a long data handler 
 * @param {*} Model 
 * @returns 
 */
exports.addList = (Model) => catchAsync(async (req, res) => {

    const datas = await Model.insertMany(req.body)
    res.status(200).json(datas);

});

/**
 * Finds and udates an object using the standar _id parameter
 * @param {*} Model 
 * @returns 
 */
exports.update = (Model) => catchAsync(async (req, res) => {

    const data = await Model.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json(data);

});


/**
 *  Finds and deletes an object using the standar _id parameter
 * @param {*} Model 
 * @returns 
 */

exports.delete = (Model) => catchAsync(async (req, res) => {

    await Model.findOneAndDelete({ _id: req.params.id }, req.body)
    res.status(200).json({ message: "Model deleted correctly" })

});







