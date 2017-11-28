// modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { PORT, DEVELOPMENT } = require('./config');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');

// api setup
const api = express();
api.use(morgan('tiny'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// routes
// api.post('/signup', (req, res) => {
//   User.create(req.body)
//     .then(user => res.status(201).send(user))
//     .catch(err => next(err));
// });

// api.post(
//   '/login',
//   (req, res, next) => {
//     User.findOne({ name: req.body.name })
//       .then(user => {
//         console.log('Found User: ', user);
//         if (!user) {
//           res.status(400).send({ message: 'Invalid Credentials' });
//         }
//         user.comparePassword(req.body.password, (err, isMatch) => {
//           if (isMatch) {
//             var token = jwt.sign({ name: user.name }, SECRET_KEY, {
//               expiresIn: 60 * 60
//             });
//             res.send({ message: 'Authenticated!', token: token });
//           } else {
//             res.status(400).send({ message: 'Invalid Credentials' });
//           }
//         });
//       })
//       .catch(err => next(err));
//   },
//   err => {
//     console.log('ERRORS: ', err);
//   }
// );

// api.use((req, res, next) => {
//   var token =
//     req.query.token || req.body.token || req.headers['x-access-token'];
//   if (token) {
//     jwt.verify(token, SECRET_KEY, (err, decoded) => {
//       if (err) return res.send({ message: 'Invalid Token' });
//       else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({ message: 'No token provided.' });
//   }
// });
api.use('/auth', authRoutes);
api.use('/users', userRoutes);
api.use('/', gameRoutes);

api.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (DEVELOPMENT) {
  api.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

api.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

api.listen(PORT, () => {
  console.log('Server is listening on port 3000.');
});
