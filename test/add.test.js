const add = require('../lib/add')

test('adding works', () => {
  expect(add(1, 2)).toBe(3)
})