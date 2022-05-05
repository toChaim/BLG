const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const { LOCALHOST, DEVLOPMENT } = require('./src/CONSTANTS');
const { HOST, NODE_ENV, PORT } = require('./src/ENV');
const apiRoutes = require('./src/server');

// const { NODE_ENV, PORT = 5000 } = process.env;

const app = express();


if (HOST === LOCALHOST) {
  app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5000'] }));
}

app.use('/api', apiRoutes);

if (NODE_ENV !== DEVLOPMENT) {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, (err) => {
  if (err) { return console.log(err); }
  console.log(`Server listening on port: ${PORT}, NODE_ENV: ${NODE_ENV}`);
});
