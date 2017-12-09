const router = require('express').Router();
const { User } = require('../models');
const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');
const { login } = require('../middleware/auth');

router.post('/login', login);

module.exports = router;
