const User = require("../models/user.model");
const catchAsync = require("../helpers/catchAsync");


/**
 * Returns all the users inside the DB
 * @param {*} req --> request body object
 * @param {*} res --> response body object
 */
exports.findAll = catchAsync(async (req, res, next) => {

    const users = await User.find();
    res.status(200).json(users);

});


exports.find = catchAsync(async (req, res, next) => {

    const user = await User.findById(req.params.id);
    res.status(200).json(user);

});


exports.add = catchAsync(async (req, res) => {

    const user = await User.create(req.body);
    res.status(200).json(user);

});


exports.addList = catchAsync(async (req, res, next) => {

    const users = await User.insertMany(req.body)
    res.status(200).json(users);

});


exports.update = catchAsync(async (req, res) => {

    const user = await User.findByIdAndUpdate(req.params.id, {}, req.body)
    res.status(200).json(user);

});


exports.delete = catchAsync(async (req, res) => {



});

exports.purge = catchAsync(async (req, res) => {



});


