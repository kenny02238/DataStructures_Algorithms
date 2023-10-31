function fs(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fs(n - 1) + fs(n - 2);
  }
}

console.log(fs(7));
