// let heapSize;
// let arr = [15, 3, 17, 18, 20, 2, 1, 666];
// heapSort();
// console.log(arr);

// function buildMaxHeap() {
//   heapSize = arr.length - 1;
//   for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
//     maxHeapify(i);
//   }
// }

// function maxHeapify(i) {
//   let largest;
//   let l = i * 2 + 1;
//   let r = i * 2 + 2;
//   if (l <= heapSize && arr[l] > arr[i]) {
//     largest = l;
//   } else {
//     largest = i;
//   }

//   if (r <= heapSize && arr[r] > arr[largest]) {
//     largest = r;
//   }

//   if (largest != i) {
//     // swap A[i] with A[largest]
//     let temp = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = temp;
//     maxHeapify(largest);
//   }
// }

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    // exchange A[0] with A[i]
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
  }

  return arr;
}

// --------------------Practice--------------------

let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666, 1, 4, 323, 123, 333, 2];

function buildMaxHeapPractice() {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapifyPractice(i);
  }
}

function maxHeapifyPractice(i) {
  let largest = i;
  let r = i * 2 + 2;
  let l = i * 2 + 1;
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }
  if (l <= heapSize && arr[l] > arr[largest]) {
    largest = l;
  }
  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapifyPractice(largest);
  }
}
function heapSortPractice() {
  heapSize = arr.length - 1;
  buildMaxHeapPractice();
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[0];
    arr[0] = arr[heapSize];
    arr[heapSize] = temp;
    heapSize -= 1;
    buildMaxHeapPractice(0);
  }
}
heapSortPractice();
console.log(arr);
