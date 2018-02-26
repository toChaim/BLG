const api = require('express')();
const PORT = process.env.PORT || 3001;

//First Middleware
api.use((req, res, next) => {
  //console.log(req);
  next();
});

//Routes
api.use('/', (req, res, next) => {
  res.json({ message: 'Main Page' });
});

//Start Server
api.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = api;
