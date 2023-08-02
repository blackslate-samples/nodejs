// Setup and Teardown function

let testData;

beforeEach(() => {
  // Set up common test data
  testData = [1, 2, 3, 4, 5];
});

afterEach(() => {
  // Clean up after each test
  testData = [];
});

test('should test something with test data', () => {
  // Use testData in the test
  expect(testData.length).toBe(5);
});

test('should test something else with test data', () => {
  // Use testData in another test
  expect(testData.includes(3)).toBe(true);
});


let databaseConnection;

beforeAll(() => {
  // Set up the database connection (one-time operation)
  databaseConnection = connectToDatabase();
});

afterAll(() => {
  // Close the database connection (one-time operation)
  databaseConnection.close();
});

test('should test something with the database connection', () => {
  // Use the databaseConnection in the test
  expect(databaseConnection.isConnected()).toBe(true);
});


