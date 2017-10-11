const getRGBFromHex      = require('./src/getRGBFromHex'),
      getAverageInteger  = require('./src/getAverageInteger'),
      decimalToHexString = require('./src/decimalToHexString')

function calcAverageHex (hex1, hex2) {
    const rgb1 = getRGBFromHex(hex1),
          rgb2 = getRGBFromHex(hex2)

    const hex = {
        red  : decimalToHexString(getAverageInteger(rgb1.red, rgb2.red)),
        green: decimalToHexString(getAverageInteger(rgb1.green, rgb2.green)),
        blue : decimalToHexString(getAverageInteger(rgb1.blue, rgb2.blue)),
    }
    
    return `${hex.red}${hex.green}${hex.blue}`
}

module.exports = calcAverageHex
