// Additional Test ScreenOrientation


//Error Handling Test

it('should handle non-existent routes', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Route not found' });
  });


  //Testing with mack Data assuming database.js contains db interaction

  jest.mock('../src/database'); // Assuming database.js contains database interactions

it('should return mocked users', async () => {
  // Assuming the mock data returns these users
  const mockedUsers = [
    { id: 3, name: 'Mocked User 1' },
    { id: 4, name: 'Mocked User 2' },
  ];

  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
  expect(response.body).toEqual(mockedUsers);
});