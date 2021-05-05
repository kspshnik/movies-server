const { celebrate } = require('celebrate');

const userJoiScheme = require('../joiSchemes/userJoiScheme');

const celebrateUser = celebrate({
  body: userJoiScheme,
});

module.exports = celebrateUser;
