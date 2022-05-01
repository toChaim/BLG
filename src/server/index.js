const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({ data: { message: 'this is data' } });
});

module.exports = router;
