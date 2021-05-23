const User = require("../models/user.model")
const crud = require("./crud.controller")
require("dotenv").config()

// Common Crud + some more standar database actions
exports.findAll = crud.findAll(User)

exports.find = crud.find(User)

exports.add = crud.add(User)

exports.addList = crud.addList(User)

exports.update = crud.update(User)

exports.delete = crud.delete(User)

// ----------- Custom routes (Login and register)--------
