const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.User.find().then(users => {
    res.status(200).send(users);
  });
});

router.get('/:id', (req, res, next) => {
  db.User.findById(req.params.id).then(user => {
    res.status(200).send(user);
  });
});

//cross site scripting?
router.post('/', (req, res, next) => {
  db.User.create(req.body).then(user => {
    res.status(201).send(user);
  });
});

router.patch('/:id', (req, res, next) => {
  db.User.create(req.params.id, req.body).then(user => {
    res.status(200).send(user);
  });
});

router.delete('/:id', (req, res, next) => {
  db.User.findByIdAndRemove(req.params.id).then(user => {
    res.status(204).send('User Deleted!');
  });
});

module.exports = router;
