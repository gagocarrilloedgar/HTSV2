const catchAsync = require("../helpers/catchAsync")
const Nea = require("../models/nea.model")
const crud = require("./crud.controller")

// Common Crud + some more standar database actions
exports.findAll = crud.findAll(Nea)

exports.find = crud.find(Nea)

exports.add = crud.add(Nea)

exports.addList = crud.addList(Nea)

exports.update = crud.update(Nea)

exports.delete = crud.delete(Nea)
