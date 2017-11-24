const mongoose = require('mongoose');

mongoose.set('debug', process.env.ENV === 'devolopment');
mongoose.Promise = Promise;

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/GRATBOT')
  .then(ret => {
    console.log('Database Connected: ', ret);
  })
  .catch(err => {
    if (process.env.ENV === 'devolopment') {
      console.log('Database Connection Failure: ', err);
    }
  });

module.exports.User = require('./user');
