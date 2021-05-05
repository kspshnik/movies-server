const { isEmail } = require('validator');

const validateEmail = (email) => isEmail(email);

module.exports = validateEmail;
