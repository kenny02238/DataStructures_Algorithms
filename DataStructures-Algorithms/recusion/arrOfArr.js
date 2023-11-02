let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

function collector(arr1) {
  let result = [];
  helper(arr1);
  return result;

  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

function practice(arr) {
  let ans = [];
  recursion(arr);
  function recursion(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        practice(arr[i]);
      } else {
        ans.push(arr[i]);
      }
    }
  }
  return ans;
}
console.log(practice(arrs));
