// 此為計算交集 使用counter

function intersection() {
  const arrA = [1, 5, 76, 3, 7, 4, 6];
  const arrB = [2, 5, 32, 4, 567, 23, 4, 1, 3];
  const concatArr = [...arrA, ...arrB];
  const counter = {};
  const result = [];
  for (let i = 0; i < concatArr.length; i++) {
    if (!counter[concatArr[i]]) {
      counter[concatArr[i]] = 1;
    } else {
      counter[concatArr[i]]++;
    }
  }

  for (let i in counter) {
    if (counter[i] >= 2) {
      result.push(i);
    }
  }
  console.log(result);
  return result;
}
intersection();
