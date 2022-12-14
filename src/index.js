const express = require('express');
const readTalker = require('./utils/fs/readTalker');

const app = express();
app.use(express.json());

const PORT = '3000';
const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST_STATUS = 404;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_request, response) => {
  const data = await readTalker();
  response.status(HTTP_OK_STATUS).json(data); 
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const data = await readTalker();
  const dataById = data.filter((e) => e.id === Number(id))[0] || [];
  if (dataById.length === 0) {
    return response
    .status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
  }
  response.status(HTTP_OK_STATUS).json(dataById); 
});

app.listen(PORT, () => {
  console.log('Online');
});
