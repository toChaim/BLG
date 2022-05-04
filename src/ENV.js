const { LOCALHOST, PRODUCTION_HOST, PRODUCTION } = require('./CONSTANTS');

const ENV = Object.assign({
  HOST: process.env.PORT ? PRODUCTION_HOST : LOCALHOST,
  PORT: 5000,
  NODE_ENV: process.env.REACT_APP_NODE_ENV || PRODUCTION,
}, process.env);

console.log(ENV, process.env);

module.exports = ENV;
