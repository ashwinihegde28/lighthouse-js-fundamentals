const lastIndexOf = function (arr, value) {
  let i = arr.length - 1;
  let output = -1;
  while (i > -1) {
    if (value === arr[i]) {
      output = i;
      break;
    } else {
      i--;
    }
  }
  return output;
};
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
