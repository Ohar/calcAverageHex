function getRGBFromHex (hex) {
    return {
        red  : parseInt(hex.slice(0, 2), 16),
        green: parseInt(hex.slice(2, 4), 16),
        blue : parseInt(hex.slice(4, 6), 16),
    }
}

module.exports = getRGBFromHex
