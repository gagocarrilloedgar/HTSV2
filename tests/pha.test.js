const { csv2json } = require("../helpers/csv2json");
const notFound = require("../middlewares/notFound");
const { api } = require("./helpers");
const pha = "assets/pha.csv";


require("./jest.config");

describe("/POST /api/phas", () => {

    test('PHA list from CSV should be able to be added', async () => {

        const jsonArray = await csv2json(pha);
        //New mock users
        await api
            .post(`/phas/addList`)
            .send(jsonArray)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

    });

});


describe("/PUT /api/neas", () => {

    test('Phas location are not 0', async () => {

        const jsonArray = [
            {
                full_name: "test",
                a: 1.078076432,
                e: 0.827072914,
                i: 22.81881892,
                om: 87.98911327,
                w: 31.40697081,
                ma: 8.160598893
            },
            {
                full_name: "test_1",
                a: 1.290033303,
                e: 0.29927236,
                i: 64.00479642,
                om: 94.36039279,
                w: 61.53675306,
                ma: 216.5140406
            }
        ]

        await api.post(`/phas/addList`).send(jsonArray);

        const response = await api.get('/phas/findAll');

        await api
            .put("/phas/propagateLatLong")
            .send(response.body)
            .expect(200);


        const resp = await api.get('/phas/findAll');

        expect(resp.body[0].location.lat).toEqual(expect.any(Number))
        expect(resp.body).not.toEqual(response.body)

    });


});

