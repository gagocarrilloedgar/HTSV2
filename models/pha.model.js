const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhaSchema = new Schema(
    {
        full_name: { type: String, required: true },
        a: { type: Number, required: true },
        e: { type: Number, required: true },
        i: { type: Number, required: true },
        om: { type: Number, required: true },
        w: { type: Number, required: true },
        ma: { type: Number, required: true },
        location: {
            lat: { type: Number, default: 0 },
            long: { type: Number, default: 0 },
        },
    },
    {
        timestamps: true,
    }

)

const Pha = mongoose.model("Pha", PhaSchema);

module.exports = Pha;

