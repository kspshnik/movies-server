import { Schema as MongooseSchema, model as mongooseModel } from 'mongoose';
import bcrypt from 'bcryptjs';

import validateEmail from '../helpers/validateEmail';

import NotAuthorizedError from '../errors/NotAuthorizedError';

const UserSchema = new MongooseSchema({
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

UserSchema.statics.testByCredentials = async (email, password) => {
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

const UserModel = mongooseModel('user', UserSchema);

export default UserModel;
