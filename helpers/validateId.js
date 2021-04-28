import isMongoId from 'validator/es/lib/isMongoId';

const validateId = (userId) => isMongoId(userId);

export default validateId;
