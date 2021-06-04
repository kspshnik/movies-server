const UserModel = require('../models/UserModel');

const NotFoundError = require('../errors/NotFoundError');

async function getUserController(req, res, next) {
  const user = req.usr.id;
  try {
    const usr = await UserModel.findById(user);
    if (usr) {
      const { name, email } = usr;
      res.status(200).json({ name, email });
    } else {
      throw new NotFoundError(
        `Пользователь с идентификатором ${user} не найден`,
      );
    }
  } catch (err) {
    next(err);
  }
}

module.exports = getUserController;
