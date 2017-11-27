const mongoose = require('mongoose');
const { MONGODB_URI, DEVELOPMENT, ENV } = require('../config');

mongoose.set('debug', DEVELOPMENT);
mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI, { useMongoClient: true })
  .then(() => {
    console.log('Database connected.');
  })
  .catch(err => {
    console.log(`database failed to connected. err="${err}"`);
  });

module.exports.User = require('./user');
