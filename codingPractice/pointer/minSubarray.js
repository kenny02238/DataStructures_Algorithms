function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {
      // update the value of minLength
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      left++;
    }

    right++;
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

// console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));

function practice(arr, sum) {
  let pointer1 = 0;
  let pointer2 = 0;
  let minLength = Infinity;
  let temp = 0;
  let ansArr = [];
  while (pointer2 <= arr.length) {
    if (temp < sum) {
      temp += arr[pointer2];
      pointer2++;
    } else {
      if (pointer2 - pointer1 < minLength) {
        minLength = pointer2 - pointer1;
      }
      temp -= arr[pointer1];
      pointer1++;
    }
  }

  return minLength == Infinity ? 0 : minLength;
}
console.log(practice([8, 1, 6, 60, 3, 16, 5, 7, 28, 30, 12], 60));
