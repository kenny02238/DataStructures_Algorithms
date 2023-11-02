//回文
// palindrome("tacocat"); // true
// palindrome("amanaplanacanalpanama"); // true
console.log(practice("asdfsafeaw")); //false

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    console.log(str[left], str[right]);
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}
function practice(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
