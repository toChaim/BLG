const express = require('express');
const router = express.Router();
const games = require('../games');

router.get('/', (req, res) => {
  res.json({ message: 'List of Games' });
});

router.get('/:id', (req, res, next) => {
  if (!games[req.params.id]) {
    console.log("can't find that game.");
    return next();
  }
  console.log('got a game');
  res.json({ message: 'Get a Game' });
});

module.exports = router;
