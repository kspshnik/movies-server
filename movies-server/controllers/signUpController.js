const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel');

const ConflictError = require('../errors/ConflictError');

const saltRounds = 10;

async function signUpController(req, res, next) {
  const { email, password, name } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      throw new ConflictError(
        `Пользователь с адресом электронной почты ${email} уже существует`,
      );
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await UserModel.create({
      email,
      password: hash,
      name,
    });
    res
      .status(200)
      .json({ name: newUser.name, email: newUser.email, id: newUser._id });
  } catch (err) {
    next(err);
  }
}

module.exports = signUpController;
