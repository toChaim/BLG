const { User } = require("../models");
const router = require("express").Router();
const {
  login,
  ensureLoggedIn,
  ensureCorrectUser
} = require("../middleware/auth");

router.get("/", (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) return next();
      res.json(user);
    })
    .catch(err => next(err));
});

router.post(
  "/",
  (req, res, next) => {
    var user = { username: req.body.username };
    User.create(req.body)
      .then(user => {
        res.status(201);
        next();
      })
      .catch(err => next(err));
  },
  login
);

router.patch("/:id", ensureLoggedIn, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => next(err));
});

router.delete("/:id", ensureLoggedIn, ensureCorrectUser, (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => next(err));
});

module.exports = router;
