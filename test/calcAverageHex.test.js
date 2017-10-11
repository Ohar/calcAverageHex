const chai           = require('chai'),
      calcAverageHex = require('./../calcAverageHex')

describe(
    'calcAverageHex', () => {
        it(
            'Returns function', () => {
                chai.assert.isFunction(calcAverageHex)
            }
        )


        describe(
            'Calculating is correct', () => {
                it(
                    '000000, 020202 → 010101', () => {
                        chai.assert.equal(calcAverageHex('000000', '020202'), '010101')
                    }
                )

                it(
                    'AABBCC, CCBBAA → BBBBBB', () => {
                        chai.assert.equal(calcAverageHex('AABBCC', 'CCBBAA'), 'BBBBBB')
                    }
                )

                it(
                    '123456, FEDCBA → 888888', () => {
                        chai.assert.equal(calcAverageHex('123456', 'FEDCBA'), '888888')
                    }
                )

            }
        )

    }
)
