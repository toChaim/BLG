const { LOCALHOST, PRODUCTION_HOST, PRODUCTION } = require('./CONSTANTS');

const ENV = Object.assign({
  HOST: process.env.NODE_ENV !== PRODUCTION ? LOCALHOST : PRODUCTION_HOST,
  PORT: 5000,
  NODE_ENV: process.env.REACT_APP_NODE_ENV || PRODUCTION,
}, process.env);

console.log(process.env);

module.exports = ENV;
