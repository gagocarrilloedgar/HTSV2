
const { api } = require("./helpers")
require("./jest.config")

describe("/GET /api/neas", () => {
    test('Nea are returned as json', async () => {
        await api
            .get('/neas/findAll')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    test("Nea should allways return lenght 0 at the beggining", async () => {
        const response = await api.get('/neas/findAll')
        const expectedLenght = 0

        expect(response.body).toHaveLength(expectedLenght)
    })
})
