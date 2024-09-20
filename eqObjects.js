// FUNCTION helper
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// FUNCTION IMPLEMENTATION
const eqObjects = function (object1, object2) {
  // 1. same number of keys
  if (Object.keys (object1).length !== Object.keys (object2).length) {
    return false;
  }
  // 2. The value for each key in one object is the same
  // as the value for that same key in the other object
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

// TEST CODE
const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
eqObjects (multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
}
console.log (eqObjects (multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false