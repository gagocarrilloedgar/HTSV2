const csv = require('csvtojson');


/**
 * Returns a json array from the data provided by the csv file passed 
 * @param {*} path  --> Path where the file is
 * @param {*} selector --> Client/ Nea selector to decide the kind of parser 
 * @returns 
 */

exports.csv2json = (path, selector) => {

    const numberParser = {
        flat: true,
        cellParser: "number" // string or a function 
    }

    let parserOptions = {};

    switch (selector) {
        case "client":
            parserOptions = {
                "age": numberParser,
                "long": numberParser,
                "lat": numberParser,
            }
            break;

        default:
            parserOptions = {
                colParser: {
                    "a": numberParser,
                    "e": numberParser,
                    "i": numberParser,
                    "om": numberParser,
                    "w": numberParser,
                    "ma": numberParser,
                }
            }
            break;
    }

    const jsonArray = csv(parserOptions).fromFile(path).then(res => { return res })

    return jsonArray;

}