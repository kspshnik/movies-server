import isURL from 'validator/es/lib/isURL';

const validateUrl = (url) =>
  isURL(url, {
    allow_underscores: true,
    protocols: ['http', 'https'],
  });

export default validateUrl;
