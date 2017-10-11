const padString = require('./padString')

function decimalToHexString (decimal) {
    return padString(decimal.toString(16)).toUpperCase()
}

module.exports = decimalToHexString
