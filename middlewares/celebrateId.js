const { celebrate } = require('celebrate');

const idJoiScheme = require('../joiSchemes/idJoiScheme');

const celebrateId = celebrate({
  params: idJoiScheme,
});

module.exports = celebrateId;
