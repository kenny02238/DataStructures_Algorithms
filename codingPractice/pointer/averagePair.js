//給一個sorted陣列 找出可以平均等於第二個傳入數字
//ex. ([-11,0,1,2,3,9,14,17,21],1.5)
//pair = (-11,14),(0,3),(1,2)

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg == avg) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}

function practice(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  const ans = [];

  while (left < right) {
    const testAvg = (arr[left] + arr[right]) / 2;
    if (testAvg === avg) {
      ans.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (testAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  console.log(ans);
}
practice([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
