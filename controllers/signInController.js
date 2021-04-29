const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');

const { JWT_KEY } = require('../movie-server.config');

async function signInController(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await UserModel.testByCredentials(email, password);
    const token = jwt.sign({ id: user._id }, JWT_KEY, {
      expiresIn: '7d',
    });
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = signInController;
