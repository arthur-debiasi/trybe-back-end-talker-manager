const express = require('express');
const loginRouter = require('./routes/loginRouter');
const talkerRouter = require('./routes/talkerRouter');

const app = express();
app.use(express.json());

const PORT = '3000';
const HTTP_OK_STATUS = 200;
// const HTTP_BAD_REQUEST_STATUS = 404;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
