const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log('real users being called.');
  return res.json({ name: 'Tom Thumb' });
});

module.exports = router;
