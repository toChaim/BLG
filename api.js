//modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// api setup
const api = express();
api.use(morgan('tiny'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

//connect database
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/BLG');
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  userName: String,
  password: String
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 14).then(
    hashedPassword => {
      user.password = hashedPassword;
      next();
    },
    err => next(err)
  );
});
