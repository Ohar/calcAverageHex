const chai                 = require('chai'),
      decimalsToAverageHex = require('./../src/decimalsToAverageHex')

describe(
    'decimalsToAverageHex', () => {
        it(
            'Returns function', () => {
                chai.assert.isFunction(decimalsToAverageHex)
            }
        )

        describe(
            'Calculating is correct', () => {
                it(
                    '8, 10 → 09', () => {
                        chai.assert.equal(decimalsToAverageHex(8, 10), '09')
                    }
                )

                it(
                    '18, 105 → 3D', () => {
                        chai.assert.equal(decimalsToAverageHex(8, 10), '09')
                    }
                )
            }
        )

    }
)
