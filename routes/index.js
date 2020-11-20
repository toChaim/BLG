const express = require('express');
const router = express.Router();

const users = {};
let id = 1;

const AlreadyExistsError = { error: 403, message: 'username already exists' };
const NotFoundError = { error: 404, message: "user not found" };
const DeletedUser = { message: 'deleted' };

router.get('/users', (req, res) => res.json(users));

router.get('/users/:username',
  (req, res) => res.json(users[req.params.username] || NotFoundError)
);

router.post('/users', (req, res) => {
  const { username } = req.body;
  if (users[username]) {
    return res.json(AlreadyExistsError);
  }
  users[req.body.username] = { username, id: id++ };
  return res.json(users[username]);
});

router.patch('/users/:username', (req, res) => {
  const { newName } = req.body;
  const oldName = req.params.username;

  if (users[newName]) { return res.json(AlreadyExistsError); }

  users[newName] = { ...users[oldName], username: newName };
  users[oldName] = DeletedUser;

  return res.json(users[newName]);
});

router.delete('/users/:username', (req, res) => {
  if (users[req.params.username] === DeletedUser || users[req.params.username] === undefined) {
    return res.json(NotFoundError);
  }
  users[req.params.username] = DeletedUser;
  return res.json(DeletedUser);
});

module.exports = router;
