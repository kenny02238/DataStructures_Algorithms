function sameFrequencyCounter(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const counter = {};
  for (let i = 0; i < str1.length; i++) {
    if (!counter[str1[i]]) {
      counter[str1[i]] = 1;
    } else {
      counter[str1[i]]++;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (counter[str2[i]]) {
      counter[str2[i]]--;
    } else {
      return false;
    }
  }
  for (let property in counter) {
    if (counter[property] !== 0) {
      return false;
    }
  }
  return true;
}

const ans = sameFrequencyCounter("acabb", "ababc");
console.log(ans);
