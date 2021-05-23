const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clientSchema = new Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        age: { type: Number, required: true },
        long: { type: Number, required: true },
        lat: { type: Number, required: true },
        hostpot_asteroids: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
)

const Client = mongoose.model("Client", clientSchema)

module.exports = Client
