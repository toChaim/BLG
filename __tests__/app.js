const request = require('supertest');
const app = require('../app');

describe('Test App', () => {
  describe('GET / ', () => {
    test('Should return home page', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.type).toBe('text/html');
      expect(res.body).toMatchSnapshot();
    });
  });
});
