const api = require('express')();
const PORT = process.env.PORT || 3001;

//First Middleware
api.use((req, res, next) => {
  //console.log(req);
  next();
});

//Routes
api.get('/', (req, res, next) => {
  console.log('root triggered');
  res.json({ message: 'Main Page' });
});

// 404 Not Found
api.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// 500 Server Error
api.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

//Start Server
api.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = api;
