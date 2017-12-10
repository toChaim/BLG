const router = require("express").Router();
const { login } = require("../middleware/auth");

router.post("/login", login);

module.exports = router;
