const request = require('supertest');
const { expect } = require('chai');
const api = require('../api');

describe('GET / gets the main page', () => {
  it('respond with json', done => {
    request(api)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        done(err);
      });
  });
});

describe('GET /id should retrun an error', () => {
  it('respond with json', done => {
    request(api)
      .get('/id')
      .set('Accept', 'application/json')
      .expect(404)
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        done(err);
      });
  });
});
