const bcrypt = require('bcryptjs');

const UserModel = require('../models/UserModel');

const saltRounds = 10;

async function signUpController(req, res, next) {
  const { email, password, name } = req.body;
  try {
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
