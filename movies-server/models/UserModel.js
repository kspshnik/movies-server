const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validateEmail = require('../helpers/validateEmail');

const NotAuthorizedError = require('../errors/NotAuthorizedError');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: (props) =>
        `${props.value} не является корректным адресом электронной почты`,
    },
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  __v: { type: Number, select: false },
});

UserSchema.statics.testByCredentials = async function (email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user) {
    throw new NotAuthorizedError('Неправильные почта или пароль');
  }
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    throw new NotAuthorizedError('Неправильные почта или пароль');
  }
  return user;
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
