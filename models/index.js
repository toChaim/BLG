const mongoose = require('mongoose');
const { MONGODB_URI, MONGOOSE_DEBUUG } = require('../config');

mongoose.set('debug', MONGOOSE_DEBUUG);
mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

module.exports.User = require('./user');
