// helper function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// FUNCTION IMPLEMENTATION
// return a count of each of the letters in a sentence (ignoring spaces)
const countLetters = function (sentence) {
  const ret = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (ret[letter]){
        ret[letter]++;
      } else {
        ret [letter] = 1;
      }
    }
  }
  return ret;
}

//test code
console.log(countLetters("lighthouse in the house"));
// expected output: { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
console.log(countLetters("hello"));
// expected output: { h: 1, e: 1, l: 2, o: 1 }

let result = countLetters("hello");
assertEqual(result['h'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 2);
assertEqual(result['o'], 1);