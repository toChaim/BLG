// const request = require('supertest');
const api = require('../api');
// const expect = require('chai').expect;
// const mongoose = require('mongoose');
// const db = require('../models/');

// mongoose.Promise = Promise;

// // describe("GET /users", function() {
// //   it("responds with JSON", function(done) {
// //     request(api)
// //       .get("/userss/")
// //       .expect("Content-Type", /json/)
// //       .expect(200, done);
// //   });
// // });

// describe('GET /users', function() {
//   it('responds with JSON', function(done) {
//     request(api)
//       .get('/qqqusers')
//       .expect(200, done);
//   });
// });

const request = require('supertest');

// const app = require('express')();

// api.get('/users', function(req, res) {
//   res.status(200).json({ name: 'tobi' });
// });

describe('GET /users this is running?', function() {
  it('respond with json', function(done) {
    request(api)
      .get('/usersaa')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        //console.log('err=', err, ' res=', res);
        if (err) return done(err);
        done();
      });
  });
});
