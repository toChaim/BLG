const express = require("express");
const bodyParser = require('body-parser');
const userRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(userRoutes);

app.get('/', (req, res) => res.json('Welcome to BLG!'));

app.listen(3000, () => console.log("app listening on prot 3000"));
