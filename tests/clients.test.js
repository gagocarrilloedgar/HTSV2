const { csv2json } = require("../helpers/csv2json");
const { api } = require("./helpers");
const clients = "assets/clients.csv";

require("./jest.config");

describe("/POST /api/clients", () => {

    test('Clients list from CSV should be able to be added', async () => {

        const jsonArray = await csv2json(clients, "client");
        
        await api
            .post(`/clients/addList`)
            .send(jsonArray)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

    });

});