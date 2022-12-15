const dateValidFormat = require('../utils/dateValidFormat');
const { HTTP_BAD_REQUEST_STATUS } = require('../utils/httpStatus/httpStatus');

const watchedAtValidation = (request, response, next) => {
  const { talk: { watchedAt } } = request.body;
  if (!watchedAt) {
    return response.status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!dateValidFormat(watchedAt)) {
    return response.status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = watchedAtValidation;