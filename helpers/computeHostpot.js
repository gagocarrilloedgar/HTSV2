


/**
 * Given a client and an array of phas the hostpot is computed
 * @param {*} phas 
 * @param {*} client 
 */

exports.computeHostpot = (pha, client) => {

    if (pha === undefined || client === undefined) {
        return TypeError;
    } else {

        const space = 3; // 3 degrees

        const leftSup = [client.lat + space, client.long - space];
        const leftDown = [client.lat - space, client.long - space];
        const rightSup = [client.lat + space, client.long + space];
        const rightDown = [client.lat - space, client.long + space];

        const square = [leftSup, rightSup, leftDown, rightDown];
        const pos = [pha.location.lat, pha.location.long];
        const res = this.isInside(pos, square);

        return res;
    }

}

/**
 * Given a clients position and a polygon defined with the maximums and minimus returns
 * wheter the position is inside or not
 * @param {*} point clients position 
 * @param {*} pol Polygoin defining the limits of the space
 * @returns 
 */

exports.isInside = (point, pol) => {

    const x = point[0];
    const y = point[1];

    let inside = false;

    for (let i = 0, j = pol.length - 1; i < pol.length; j = i++) {
        let xi = pol[i][0], yi = pol[i][1];
        let xj = pol[j][0], yj = pol[j][1];

        let intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};


