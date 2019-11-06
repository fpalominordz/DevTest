function sum(a, b, c) {
  let result = a + b;
  if (c) {
    result += 5;
  }
  return result;
}

module.exports = sum;
