// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
//
// // TEST CODE
// assertArraysEqual(middle([1]), []); // => should PASS
// assertArraysEqual(middle([1, 2]), []); // => should PASS
// assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS


//TEST WITH MOCHA AND CHAI

/*
how to run this test: npm test test/middleTest.js
 */
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it("return [2,3] for [1, 2,3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  
});