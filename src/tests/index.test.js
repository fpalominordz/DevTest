const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 + c to equal 8', () => {
  expect(sum(1, 2, true)).toBe(8);
});