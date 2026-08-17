'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const methods = {
    result: 0,
    add(num) {
      methods.result += num;
    },
    subtract(num) {
      methods.result -= num;
    },
    multiply(num) {
      methods.result *= num;
    },
    divide(num) {
      methods.result /= num;
    },
    reset() {
      methods.result = 0;

      return this;
    },
    operate(methodName, num) {
      if (typeof methodName === 'function') {
        methodName(num);
      }

      return this;
    },
  };

  return methods;
}

module.exports = makeCalculator;
