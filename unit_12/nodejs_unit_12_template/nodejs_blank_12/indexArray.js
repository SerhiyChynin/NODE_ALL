module.exports = function (a, b) {
    if (b == 'id') {
        b = a.reduce((accum, item) => {
            accum[item['id']] = item;
            return accum;
        }, {})
    } else if (b == 'name') {
        b = a.reduce((accum, item) => {
            accum[item['name']] = item;
            return accum;
        }, {})
    }

    return b
}

