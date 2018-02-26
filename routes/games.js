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

module.exports = router;
