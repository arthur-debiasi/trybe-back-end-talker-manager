const TALKER_PATH = './src/talker.json';
const fs = require('fs').promises;

const readTalker = async () => JSON.parse(await fs.readFile(TALKER_PATH, 'utf-8'));

module.exports = readTalker;