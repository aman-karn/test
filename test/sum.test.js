const sum = require('./sum');

test('adds 3 + 4 to equal 7', () => {
  expect(sum.sum(3,4)).toBe(7);

});
test('adds 4 - 3 to equal 1', () => {
  expect(sum.sub(4,3)).toBe(1);

});

test('Data available', () => {
  expect(sum.check('Aman')).toContain('Aman');
});