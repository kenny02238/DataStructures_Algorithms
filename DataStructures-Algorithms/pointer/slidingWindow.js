// Write two functions that calculate ths max and min sum of n consecutive numbers in an array
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2); // 12
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let max_value = -Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_value) {
      max_value = attempt;
    }
  }

  console.log(max_value);
  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }

  console.log(min_value);
  return min_value;
}

function imProveMaxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let temValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}

function maxPractice(arr, size) {
  if (size > arr.length) return null;
  let maxSum = 0;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  let tempValue = maxSum;
  for (let i = size; i < arr.length; i++) {
    tempValue = tempValue + arr[i] - arr[i - size];
    if (tempValue > maxSum) maxSum = tempValue;
  }
  console.log(maxSum);
}

function minPractice(arr, size) {
  if (size > arr.length) return null;
  let minSum = 0;
  for (let i = 0; i < size; i++) {
    minSum += arr[i];
  }
  let tempValue = minSum;
  for (let i = size; i < arr.length; i++) {
    tempValue = tempValue + arr[i] - arr[i - size];
    if (tempValue < minSum) minSum = tempValue;
  }
  console.log(minSum);
}

minPractice([2, 7, 3, 0, 6, 1, -5, -12, -11, -3, 30, 30], 3);
