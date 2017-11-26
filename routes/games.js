const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List of Games' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get a Games' });
});

module.exports = router;
