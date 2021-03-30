

const mongoose = require("mongoose");

// Accessing environmental variobles
require("dotenv").config();


// Loading the mongo db uri to a constat for easier access
const uri = process.env.ATLAS_URI;

// Mongoose object conection opstions
const connectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

mongoose
    .connect(uri, connectionOptions)
    .then((db) => console.log("Database is connected"))
    .catch((err) => console.log(err));

//Creatinng a new connection so it can be tested
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose.connection;
