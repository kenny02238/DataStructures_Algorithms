function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  // a1 or a2 might have some elements left
  // use loop to put them all into result

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(right), mergeSort(left));
  }
}

// --------------------Practice--------------------

function mergePractice(leftArr, rightArr) {
  let pointer1 = 0;
  let pointer2 = 0;
  const result = [];
  while (pointer1 < leftArr.length && pointer2 < rightArr.length) {
    if (leftArr[pointer1] < rightArr[pointer2]) {
      result.push(leftArr[pointer1]);
      pointer1++;
    } else {
      result.push(rightArr[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < leftArr.length) {
    result.push(leftArr[pointer1]);
    pointer1++;
  }
  while (pointer2 < rightArr.length) {
    result.push(rightArr[pointer2]);
    pointer2++;
  }
  return result;
}
function mergeSortPractice(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, arr.length);
    return mergePractice(
      mergeSortPractice(leftArr),
      mergeSortPractice(rightArr)
    );
  }
}

console.log(mergeSortPractice([15, 3, 17, 18, 35, 11, 0, 36, 2, 3]));
