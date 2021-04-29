const { isURL } = require('validator');

const validateUrl = (url) =>
  isURL(url, {
    allow_underscores: true,
    protocols: ['http', 'https'],
  });

module.exports = validateUrl;
