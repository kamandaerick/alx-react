const { getFullYear } = require('./utils');
const { getFooterCopy } = require('./utils');
const { getLatestNotification } = require('./utils');


test ('getFullYear', () => {
  const expectedYear = new Date().getFullYear();
  expect(getFullYear()).toBe(expectedYear);
})

test('getFooterCopy returns correct string when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns correct string when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the expected notification string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
