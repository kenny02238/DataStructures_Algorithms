// LCS is a dynamic programming algorithm that finds the longest common subsequence between two strings.
// Subsequence: is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.
// ex: "abc", "abg", "bdf", "aeg", "acefg" are subsequences of "abcdefg".

//SubString: is a contiguous part of a string.
//ex: "bc", "efg" are substrings of "abcdefg".

function simpleLCS(str1, str2) {
  if (str1.length == 0 || str2.length == 0) {
    return 0;
  } else {
    if (str1[str1.length - 1] == str2[str2.length - 1]) {
      return (
        1 +
        simpleLCS(
          str1.substring(0, str1.length - 1),
          str2.substring(0, str2.length - 1)
        )
      );
    } else {
      return Math.max(
        simpleLCS(str1.substring(0, str1.length - 1), str2),
        simpleLCS(str1, str2.substring(0, str2.length - 1))
      );
    }
  }
}

function simpleLCSPractice(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return 0;
  } else {
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return (
        1 +
        simpleLCSPractice(
          str1.substring(0, str1.length - 1),
          str2.substring(0, str2.length - 1)
        )
      );
    } else {
      return Math.max(
        simpleLCSPractice(str1.substring(0, str1.length - 1), str2),
        simpleLCSPractice(str2.substring(0, str2.length - 1), str1)
      );
    }
  }
}

console.log(simpleLCSPractice("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"));
