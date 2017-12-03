const router = require('express').Router();
const { User } = require('../models');
const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          var token = jwt.sign({ user_id: user.id }, SECRET_KEY);
          res.json(token);
        } else {
          res.status(400).send('Invalid Credentials');
        }
      });
    })
    .catch(err => {
      console.log('inner error');
      var err = new Error('Invalid Credentials');
      err.status = 400;
      next(err);
    });
});

module.exports = router;
