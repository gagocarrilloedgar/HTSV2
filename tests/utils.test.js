const { computeHostpot } = require("../helpers/computeHostpot");
const { computePrice } = require("../helpers/computePrice")



describe("Compute ensurance policy price", () => {

    test("If empty person should return Error", () => {
        const resp = computePrice();

        expect(resp).toBe(TypeError)
    })

    test("If all variables 0 price should return fixed price", () => {
        const client = {
            age: 0,
            hostpot_asteroids: 0
        }

        const resp = computePrice(client);
        expect(resp).toBe(170)
    })

})



describe("Compute hostpots", () => {
    test("If no entries should return Error", () => {
        const resp = computeHostpot();

        expect(resp).toBe(TypeError)
    })

    test("Given (0,0) user and (1,1) pha for should return true", () => {

        client = {
            lat: 0,
            long: 0,
        }

        pha = {
            location: {
                lat: 1,
                long: 1
            }
        }

        const resp = computeHostpot(pha, client);

        expect(resp).toBe(true)

    })

    test("Given (0,0) user and (4,4) pha for should return false", () => {

        client = {
            lat: 0,
            long: 0,
        }

        pha = {
            location: {
                lat: 4,
                long: 4
            }
        }

        const resp = computeHostpot(pha, client);

        expect(resp).toBe(false)

    })
})


