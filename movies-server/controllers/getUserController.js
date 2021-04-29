const UserModel = require('../models/UserModel');

const NotFoundError = require('../errors/NotFoundError');

async function getUserController(req, res, next) {
  const id = req.user;
  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { name, email } = user;
      res.status(200).json({ name, email });
    } else {
      throw new NotFoundError(`Пользователь с идентификатором ${id} не найден`);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = getUserController;
