// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
// isSubsequence("abc", "bac"); // false (order matters)
// 第二個字串是否可以用第一個去組成 並且有順序之分
// isSubsequence("", "abc"); // true

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    console.log(true);
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    pointer2++;
  }

  console.log(false);
  return false;
}

function practice(str1, str2) {
  if (str1.length == 0) return true;
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }

  if (pointer1 == str1.length) {
    return true;
  }
  return false;
}
console.log(practice("book", "brooklyn"));
