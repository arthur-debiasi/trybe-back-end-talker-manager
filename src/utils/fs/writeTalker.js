const TALKER_PATH = './src/talker.json';
const fs = require('fs').promises;

const writeTalker = async (data) => fs.writeFile(TALKER_PATH, JSON.stringify(data, null, 2));

module.exports = writeTalker;