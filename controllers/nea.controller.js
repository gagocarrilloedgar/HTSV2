const Nea = require("../models/nea.model");
const catchAsync = require("../helpers/catchAsync");


/**
 * Returns all the users inside the DB
 * @param {*} req --> request body object
 * @param {*} res --> response body object
 */
exports.findAll = catchAsync(async (req, res) => {

    res.status(200).json([])

});


exports.find = catchAsync(async (req, res, next) => {



});


exports.add = catchAsync(async (req, res) => {



});


exports.addList = catchAsync(async (req, res) => {



});


exports.update = catchAsync(async (req, res) => {



});


exports.delete = catchAsync(async (req, res) => {



});

exports.purge = catchAsync(async (req, res) => {



});




