// Node Modules
const router = require('express').Router();
// Configurables
const GAMES = {
  gratbot: {
    description:
      'a chat bot that helps you enjoy your gratatudes and share them.',
    route: 'gratbot'
  }
};
// Local Modules
router.get('/', (req, res, next) => {
  console.log('real games being called.');
  return res.json(GAMES);
});

router.put('/', (req, res, next) => {
  console.log('real games being added too.');
  return res.json({ message: 'game added.' });
});

router.get('/:id', (req, res, next) => {
  console.log(`real games game ${req.params.id} being called.`);
  if (!GAMES[req.params.id]) {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
  }
  return res.json(GAMES[req.params.id]);
});

//console.log(router);
module.exports = router;
