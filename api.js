const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const api = express();

api.use(morgan('tiny'));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.use('/api/users', usersRoutes);

// catch 404
api.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch other errors 500
api.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: api.get('env') === 'development' ? err : {}
  });
});

const port = process.env.PORT || 8000;
api.listen(port, () => console.log(`Server is listening on port: ${port}`));
