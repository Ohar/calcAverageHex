const getRGBFromHex        = require('./src/getRGBFromHex'),
      decimalsToAverageHex = require('./src/decimalsToAverageHex')

function calcAverageHex (hex1, hex2) {
    const rgb1 = getRGBFromHex(hex1),
          rgb2 = getRGBFromHex(hex2)

    const hex = {
        red  : decimalsToAverageHex(rgb1.red, rgb2.red),
        green: decimalsToAverageHex(rgb1.green, rgb2.green),
        blue : decimalsToAverageHex(rgb1.blue, rgb2.blue),
    }
    
    return `${hex.red}${hex.green}${hex.blue}`
}

module.exports = calcAverageHex
