// modules
const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const config = require('./config');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');

// api setup
const api = express();
api.use(morgan('tiny'));
// api.use(bodyParser.urlencoded({ extended: true }));
// api.use(bodyParser.json());

// connect database
// mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/BLG');
// mongoose.Promise = Promise;

// const userSchema = new mongoose.Schema({
//   userName: String,
//   password: String
// });

// userSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.hash(user.password, 14).then(
//     hashedPassword => {
//       user.password = hashedPassword;
//       next();
//     },
//     err => next(err)
//   );
// });

// userSchema.methods.comparePassword = function(candidatePassword, next) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return next(err);
//     next(null, isMatch);
//   });
// };

// set up mongoose model
// const User = mongoose.model('User', userSchema);

// config constants
// const SECRET_KEY = 'TOP SECRET KEY';

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

// api.use((req, res, next) => {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// if (api.get('env') === 'development') {
//   api.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//       message: err.message,
//       error: err
//     });
//   });
// }

// api.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     message: err.message,
//     error: {}
//   });
// });
api.use('/users', userRoutes);
api.use('/', gameRoutes);

api.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
