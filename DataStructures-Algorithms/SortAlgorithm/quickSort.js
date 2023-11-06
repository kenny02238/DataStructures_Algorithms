// Quick Sort: is an efficient, general-purpose, comparison-based sorting algorithm.
// The complexity is O(n log n).

// let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
// quickSort(0, arr.length - 1);
// console.log(arr);

// function partition(p, r) {
//   let x = arr[r]; // pivot
//   let i = p - 1;
//   for (let j = p; j <= r - 1; j++) {
//     if (arr[j] <= x) {
//       i += 1;
//       // swap arr[i] and arr[j]
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   // swap arr[i+1] and arr[r]
//   let temp = arr[i + 1];
//   arr[i + 1] = arr[r];
//   arr[r] = temp;

//   return i + 1;
// }

// function quickSort(p, r) {
//   if (p < r) {
//     let q = partition(p, r);
//     quickSort(p, q - 1);
//     quickSort(q + 1, r);
//   }
// }

// --------------------Practice--------------------

let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 23, 22];
quickSortPractice(0, arr.length - 1);
console.log(arr);

function partitionPractice(left, right) {
  let pivot = arr[right];
  let lessPointer = left - 1;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      lessPointer += 1;
      let temp = arr[i];
      arr[i] = arr[lessPointer];
      arr[lessPointer] = temp;
    }
  }
  let temp = arr[right];
  arr[right] = arr[lessPointer + 1];
  arr[lessPointer + 1] = temp;
  return lessPointer + 1;
}

function quickSortPractice(left, right) {
  if (left < right) {
    let partition = partitionPractice(left, right);
    quickSortPractice(left, partition - 1);
    quickSortPractice(partition + 1, right);
  }
}
