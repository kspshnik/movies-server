const MovieModel = require('../models/MovieModel');

const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

async function deleteMovieController(req, res, next) {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findById(id);

    if (!movie) {
      throw new NotFoundError(`Фильм с идентификатором ${id} не найден`);
    } else if (movie.owner.toString() !== req.user.id) {
      throw new ForbiddenError(
        'Вы не можете удалять фильмы из чужого избранного',
      );
    } else {
      await MovieModel.findByIdAndDelete(id);
      res.status(200).json({
        message: `Фильм с идентификатором ${id} успешно удалён из избранного`,
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = deleteMovieController;
