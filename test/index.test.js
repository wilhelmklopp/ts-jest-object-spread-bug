const index = require('../lib');

test('index works', () => {
  expect(index()).toMatchSnapshot()
})
