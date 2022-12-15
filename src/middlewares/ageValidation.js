const { HTTP_BAD_REQUEST_STATUS } = require('../utils/httpStatus/httpStatus');

const ageValidation = (request, response, next) => {
  const { age } = request.body;

  switch (true) {
    case !age:
      return response
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "age" é obrigatório' });
    case age < 18:
      return response
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
    default:
      next();
  }
};

module.exports = ageValidation;