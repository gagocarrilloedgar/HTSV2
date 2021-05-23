
/**
 * Given a client data computes the price of its life ensurance policy
 * @param {Client Model} client
 * @returns {price {type:Number}}
 */
exports.computePrice = (client) => {
    if (client !== undefined) {
        const fixedPrice = 170
        const variablePrice = (100 * client.age) / 35 + 10 * client.hostpot_asteroids

        const price = fixedPrice + variablePrice

        return price
    } else {
        return TypeError
    }
}
