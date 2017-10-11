const chai              = require('chai'),
      getAverageInteger = require('./../src/getAverageInteger')

describe(
    'getAverageInteger', () => {
        it(
            'Returns function', () => {
                chai.assert.isFunction(getAverageInteger)
            }
        )

        describe(
            'Calculating is correct', () => {
                it(
                    '18, 20 → 19', () => {
                        chai.assert.equal(getAverageInteger(18, 20), 19)
                    }
                )

                it(
                    '1, 2 → 2', () => {
                        chai.assert.equal(getAverageInteger(1, 2), 2)
                    }
                )
            }
        )

    }
)
