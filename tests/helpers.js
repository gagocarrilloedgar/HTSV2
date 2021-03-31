const supertest = require('supertest');
const { app } = require("../server");
const api = supertest(app);


module.exports = {
    api
}