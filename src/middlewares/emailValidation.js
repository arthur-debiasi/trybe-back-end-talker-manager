const { HTTP_NOT_FOUND_STATUS } = require('../utils/httpStatus/httpStatus');

const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const emailValidation = (request, res, next) => {
  console.log(request.header('User-Agent'));
  if (!request.body.email || request.body.email.length === 0) {
 return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'O campo "email" é obrigatório' }); 
}
  const { email } = request.body;
  if (!regex.test(email)) {
    return res.status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = { emailValidation };
