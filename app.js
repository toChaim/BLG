const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(userRoutes);

app.get('/', (req, res) => res.json('Welcome to BLG!'));

module.exports = app;
