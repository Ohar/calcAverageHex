const HEX_STR_LEN = 2

function padString (str) {
    return str.length < HEX_STR_LEN
        ? `0${str}`
        : str
}

module.exports = padString
