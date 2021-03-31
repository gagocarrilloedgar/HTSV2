const Client = require("../models/client.model");
const crud = require("./crud.controller");

// Common Crud + some more standar database actions
exports.findAll = crud.findAll(Client);

exports.find = crud.find(Client);

exports.add = crud.add(Client);

exports.addList = crud.addList(Client);

exports.update = crud.update(Client);

exports.delete = crud.delete(Client);




