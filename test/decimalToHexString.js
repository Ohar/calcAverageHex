const chai    = require('chai'),
    padString = require('./../src/padString')

describe(
    'padString', () => {
        it(
            'Returns function', () => {
                chai.assert.isFunction(padString)
            }
        )

        describe(
            'Calculating is correct', () => {
                it(
                    '1 → 01', () => {
                        chai.assert.equal(padString(1), '01')
                    }
                )

                it(
                    '99 → 63', () => {
                        chai.assert.equal(padString(99), '99')
                    }
                )
            }
        )

    }
)
