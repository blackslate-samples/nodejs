// Test for String Concatenation

const { concatenateStrings } = require('./app');

test('should concatenate two strings', () => {
  const result = concatenateStrings('Hello', ' World');
  expect(result).toBe('Hello World');
});


// Test for area of rectangle

const { calculateRectangleAreaAsync } = require('./app');

test('should calculate the area of a rectangle asynchronously', async () => {
  const area = await calculateRectangleAreaAsync(5, 10);
  expect(area).toBe(50);
});

// Test for fetching data in api

const { fetchDataFromAPI } = require('./app');

test('should fetch data from the API', async () => {
  const data = await fetchDataFromAPI();
  expect(data).toBe('Data fetched from API');
});



