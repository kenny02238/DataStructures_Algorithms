let unsorted = [14, -4, 17, 6, 14, -3, 22, 1, -5];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }

  console.log(arr);
  return arr;
}

function practice(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
  return arr;
}

practice(unsorted);
