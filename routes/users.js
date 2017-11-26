const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'list of users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get a user' });
});

router.post('/', (req, res, next) => {
  res.json({ message: 'Add a user' });
});

router.patch('/:id', (req, res, next) => {
  res.json({ message: 'Update a user' });
});

router.delete('/:id', (req, res, next) => {
  res.status(204).json({ message: 'User Removed' });
});

module.exports = router;
