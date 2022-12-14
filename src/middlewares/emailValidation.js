const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const HTTP_BAD_REQUEST_STATUS = 400;

const emailValidation = (req, res, next) => {
  if (!req.body.email || req.body.email.length === 0) {
 return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo "email" é obrigatório' }); 
}
  const { email } = req.body;
  if (!regex.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = { emailValidation };
