const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NeaSchema = new Schema(
    {
        full_name: { type: String, required: true },
        a: { type: Number, required: true },
        e: { type: Number, required: true },
        i: { type: Number, required: true },
        om: { type: Number, required: true },
        w: { type: Number, required: true },
        ma: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
)

const Nea = mongoose.model("Nea", NeaSchema)

module.exports = Nea
