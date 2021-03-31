const catchAsync = require("../helpers/catchAsync");
const PHA = require("../models/pha.model");
const crud = require("./crud.controller");
const { body2latlong } = require("keplerjs");

// Common Crud + some more standar database actions
exports.findAll = crud.findAll(PHA);

exports.find = crud.find(PHA);

exports.add = crud.add(PHA);

exports.addList = crud.addList(PHA)

exports.update = crud.update(PHA)

exports.delete = crud.delete(PHA)


// Custom routes 
exports.propagateLatLong = catchAsync(async (req, res) => {

    const phas = await PHA.find({ _id: { $in: req.body } });

    phas.map(
        pha => {
            const pos = body2latlong(pha);
            pha.location.lat = pos.lat;
            pha.location.long = pos.long;
            console.log(pha);
            pha.save();
        });

    res.status(200).send(phas);


})


