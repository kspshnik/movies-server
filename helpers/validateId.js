const { isMongoId } = require('validator');

const validateId = (userId) => isMongoId(userId);

module.exports = validateId;
