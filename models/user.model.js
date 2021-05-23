const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        age: { type: Number, default: 0 },
        location: {
            lat: { type: Number, default: 0 },
            long: { type: Number, default: 0 },
        },
        hostpot_asteroids: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User
