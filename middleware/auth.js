const { SECRET_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          var token = jwt.sign({ user_id: user.id }, SECRET_KEY);
          res.json(token);
        } else {
          res.status(400).send("Invalid Credentials");
        }
      });
    })
    .catch(err => {
      console.log("inner error");
      var err = new Error("Invalid Credentials");
      err.status = 400;
      next(err);
    });
};

exports.isLoggedIn = req => {
  if (!req.headers.authorization) {
    return false;
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    return true;
  } catch (err) {
    return false;
  }
};

exports.ensureLoggedIn = (req, res, next) => {
  if (exports.isLoggedIn(req)) {
    next();
  } else {
    var err = new Error("No Lognin");
    err.status = 401;
    next(err);
  }
};

exports.isCorrectUser = req => {
  if (!req.headers.authorization) {
    return false;
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded.user_id === req.params.id;
  } catch (err) {
    return false;
  }
};

exports.ensureCorrectUser = (req, res, next) => {
  if (exports.isCorrectUser(req)) {
    next();
  } else {
    var err = new Error("Unauthorized");
    err.status = 401;
    next(err);
  }
};
