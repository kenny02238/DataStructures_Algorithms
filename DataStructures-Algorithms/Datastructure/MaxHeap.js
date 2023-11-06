// MaxHeap is a complete binary tree, which means all levels are completely filled
// except possibly the last level and the last level has all keys as left as possible.

// Complete Binary Tree:
// A Binary Tree is complete Binary Tree if all levels are completely filled except possibly
// the last level and the last level has all keys as left as possible

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    // swap A[i] with A[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

// --------------------Practice--------------------

let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];

function buildMaxHeapPractice() {
  heapSize = arr.length - 1;
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

buildMaxHeapPractice();
console.log(arr);
// let heapSize;
// let arr = [15, 3, 17, 18, 20, 2, 1, 666];
// heapSort();
// console.log(arr);
