const express = require('express');
const path = require('path');

const { NODE_ENV, PORT = 5000 } = process.env;

const app = express();

if (NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, (err) => {
  if (err) { return console.log(err); }
  console.log(`Server listening on port: ${PORT}`);
});
