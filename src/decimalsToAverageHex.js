function decimalsToAverageHex (decimal1, decimal2) {
    const average   = Math.round((decimal1 + decimal2) / 2),
          hex       = average.toString(16),
          hexPadded = hex.length < 2
              ? `0${hex}`
              : hex

    return hexPadded.toUpperCase()
}

module.exports = decimalsToAverageHex
