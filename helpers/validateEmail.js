import isEmail from 'validator/es/lib/isEmail';

const validateEmail = (email) => isEmail(email);

export default validateEmail;
