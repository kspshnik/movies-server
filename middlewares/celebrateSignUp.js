const { celebrate } = require('celebrate');

const signUpJoiScheme = require('../joiSchemes/signUpJoiScheme');

const celebrateSignUp = celebrate({
  body: signUpJoiScheme,
});

module.exports = celebrateSignUp;
