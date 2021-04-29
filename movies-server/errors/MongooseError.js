module.exports = class MongooseError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.mongooseError = true;
  }
};
