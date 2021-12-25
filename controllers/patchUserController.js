const UserModel = require('../models/UserModel');

const NotFoundError = require('../errors/NotFoundError');

async function patchUserController(req, res, next) {
  const { id } = req.usr;
  const { name, email } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (user) {
      res.status(200).json({
        name: user.name,
        email: user.email,
        id: user._id,
      });
    } else {
      throw new NotFoundError(`Пользователь с идентификатором ${id} не найден`);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = patchUserController;
