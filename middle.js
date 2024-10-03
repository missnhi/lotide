// Implement function to return the middle element(s) of an array
const middle = function(array) {
  let retArray = [];
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return retArray;
  }
  if (array.length % 2 === 0) {
    retArray.push(array[mid - 1]);
    retArray.push(array[mid]);
  } else {
    retArray.push(array[mid]);
  }
  return retArray;
}

module.exports = middle;

