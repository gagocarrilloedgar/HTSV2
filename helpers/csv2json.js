const csv = require('csvtojson');

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