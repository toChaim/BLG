const { SECRET_KEY } = require('./config');
const jwt = require('jsonwebtoken');

exports.ensureLogin = (req, res, next) => {
  try {
    const token = req.headers.jwt.verify(token);
  } catch (err) {}
};
