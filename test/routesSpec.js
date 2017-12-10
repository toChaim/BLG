const request = require('supertest');
const api = require('../api');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const db = require('../models/');

mongoose.Promise = Promise;

// describe("GET /users", function() {
//   it("responds with JSON", function(done) {
//     request(api)
//       .get("/userss/")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });

describe('GET /users', function() {
  it('responds with JSON', function(done) {
    request(api)
      .get('/qqqusers')
      .expect(200, done);
  });
});
