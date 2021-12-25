function errorsHandler(err, req, res, next) {
  const { statusCode = 500, message } = err;
  if (err.code && err.code === 11000 && err.keyValue && err.keyValue.email) {
    res.status(409).json({ message: `Пользователь с адресом электронной почты ${err.keyValue.email} уже существует` });
  } else if (err && err.message && err.message.includes('celebrate')) {
    let msg;
    if (err.details.get('body')) {
      msg = err.details.get('body').message;
    } else {
      msg = err.details.get('params').message;
    }
    res.status(400).json({
      message: msg,
    });
  } else {
    res.status(statusCode).json({
      message: statusCode === 500 ? 'Внутренняя ошибка сервера' : message,
    });
  }
  next();
}

module.exports = errorsHandler;
