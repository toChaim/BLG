const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');

exports.ensureLogin = (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (decoded) {
        next();
      } else {
        var err = new Error('No Lognin');
        err.status = 401;
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (decoded.user_id === req.params.id) {
        next();
      } else {
        var err = new Error('Unauthorized');
        err.status = 401;
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};
