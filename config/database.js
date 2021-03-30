

const mongoose = require("mongoose");

// Accessing environmental variobles
require("dotenv").config();


// Loading the mongo db uri to a constat for easier access
const connectionString = process.env.ATLAS_URI;


// Connection function with mocking check 

const connect = () => {
    // Mongoose object conection opstions
    const connectionOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }

    return new Promise((resolve, reject) => {

        // If testing we will mock the database
        if (process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage()
                .then(() => mongoose
                    .connect(connectionString, connectionOptions)
                    .then((res, err) => {
                        if (err) return reject(err);
                        console.log("Connected to mocked DB");
                        resolve();
                    })
                )

        } else {
            mongoose
                .connect(connectionString, connectionOptions)
                .then((res, err) => {
                    if (err) return reject(err);
                    console.log("Running on real DB mode");
                    resolve();
                })
        }
    });
}



function close() {
    return mongoose.disconnect();
}


//Mongoose connection main function 
const mongooseConection = ({ resolve, reject }) => {



}



module.exports = { close, connect };
