const chai          = require('chai'),
      getRGBFromHex = require('./../src/getRGBFromHex')

describe(
    'getRGBFromHex', () => {
        it(
            'Returns function', () => {
                chai.assert.isFunction(getRGBFromHex)
            }
        )


        describe(
            'Extracting is correct', () => {
                it(
                    '000000 → {red: 0, green: 0, blue: 0}', () => {
                        const result   = getRGBFromHex('000000'),
                            expected = {
                                red  : 0,
                                green: 0,
                                blue : 0,
                            }

                        chai.assert.equal(result.red, expected.red)
                        chai.assert.equal(result.green, expected.green)
                        chai.assert.equal(result.blue, expected.blue)
                    }
                )

                it(
                    'ABCD04 → {red: 171, green: 205, blue: 4}', () => {
                        const result   = getRGBFromHex('ABCD04'),
                              expected = {
                                  red  : 171,
                                  green: 205,
                                  blue : 4,
                              }

                        chai.assert.equal(result.red, expected.red)
                        chai.assert.equal(result.green, expected.green)
                        chai.assert.equal(result.blue, expected.blue)
                    }
                )
            }
        )

    }
)
