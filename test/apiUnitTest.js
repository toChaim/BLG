const request = require('supertest');
const { expect } = require('chai');
const api = require('../api');

describe('GET / gets should use gamesRoutes', () => {
  it('respond with json', done => {
    request(api)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, {
  gratbot: {
    description:
      'a chat bot that helps you enjoy your gratatudes and share them.',
    route: 'gratbot'
  }
})
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
      .expect(404, {
        message: 'Not Found',
        error: { status: 404 }
      })
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        done(err);
      });
  });
});

describe('GET /gratbot should retrun gratbot', () => {
  it('respond with json', done => {
    request(api)
      .get('/gratbot')
      .set('Accept', 'application/json')
      .expect(200, {
    description:
      'a chat bot that helps you enjoy your gratatudes and share them.',
    route: 'gratbot'
  })
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        done(err);
      });
  });
});
