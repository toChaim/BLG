// modules
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { PORT, DEVELOPMENT } = require('./config');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');

// api setup
const api = require('express')();
api.use(morgan('tiny'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// routes
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
  console.log(`Server is listening on port ${PORT}.`);
});
