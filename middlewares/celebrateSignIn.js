const { celebrate } = require('celebrate');

const signInJoiScheme = require('../joiSchemes/signInJoiScheme');

const celebrateSignIn = celebrate({
  body: signInJoiScheme,
});

module.exports = celebrateSignIn;
