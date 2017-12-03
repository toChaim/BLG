const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');

exports.hasLogin = reqAuth => {
  if (!reqAuth) {
    return false;
  }
  try {
    const token = reqAuth.split(' ')[1];
    var temp = jwt.verify(token, SECRET_KEY);
    console.log(temp);
    return true;
  } catch (err) {
    console.log(`*** debugger; ***`, err);
    return false;
  }
};

exports.ensureLogin = (req, res, next) => {
  // const token =
  //   req.headers.authorization && req.headers.authorization.split(' ')[1];
  // jwt.verify(token, SECRET_KEY, (err, decoded) => {
  //   if (decoded) {
  //     next();
  //   } else {
  //     var err = new Error('No Lognin');
  //     err.status = 401;
  //     next(err);
  //   }
  // });
  console.log('ensureLogin is not working. ');
  if (exports.hasLogin(req.headers.authorization)) {
    next();
  } else {
    var err = new Error('No Lognin');
    err.status = 401;
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
