const { PRODUCTION_HOST, PRODUCTION } = require('./CONSTANTS');

const ENV = Object.assign({
  HOST: process.env.REACT_APP_HOST || PRODUCTION_HOST,
  PORT: 5000,
  NODE_ENV: process.env.REACT_APP_NODE_ENV || PRODUCTION,
}, process.env);

module.exports = ENV;
