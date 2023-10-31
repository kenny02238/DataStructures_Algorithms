function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(counter);
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring.");
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

// uniqueLetterString(""); // 6

function practice(str) {
  const counter = new Map();
  let pointer1 = 0;
  let pointer2 = 0;
  let maxLength = -Infinity;
  while (pointer2 <= str.length) {
    if (!str[pointer2]) {
      if (pointer2 - pointer1 > maxLength) {
        maxLength = pointer2 - pointer1;
      }
      break;
    }
    if (!counter.has(str[pointer2])) {
      counter.set(str[pointer2], pointer2);
      pointer2++;
    } else {
      if (pointer2 - pointer1 > maxLength) {
        maxLength = pointer2 - pointer1;
      }
      while (pointer1 <= counter.get(str[pointer2])) {
        counter.delete(str[pointer1]);
        pointer1++;
      }
    }
  }

  return maxLength;
}

function practice2(str) {
  let pointer1 = 0;
  let pointer2 = 0;
  const counter = {};
  let max = -Infinity;

  while (pointer2 < str.length) {
    if (counter[str[pointer2]]) {
      counter[str[pointer1]]--;
      pointer1++;
    } else {
      counter[str[pointer2]] = 1;
      pointer2++;
      if (pointer2 - pointer1 > max) {
        max = pointer2 - pointer1;
      }
    }
  }
  return max;
}

const a = practice2("thisishowwedoit");
console.log(a);
