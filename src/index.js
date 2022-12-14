const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const TALKER_PATH = './src/talker.json';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (request, response) => {
  const data = await fs.readFile(TALKER_PATH, 'utf-8');
  response.status(HTTP_OK_STATUS).json(JSON.parse(data)); 
});

app.listen(PORT, () => {
  console.log('Online');
});
