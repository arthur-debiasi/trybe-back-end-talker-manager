const express = require('express');
const ageValidation = require('./ageValidation');
const nameValidation = require('./nameValidation');
const rateValidation = require('./rateValidation');
const talkValidation = require('./talkValidation');
const tokenValidation = require('./tokenValidation');
const watchedAtValidation = require('./watchedAtValidation');

const talkerPostValidation = express();

talkerPostValidation
.use('/',
tokenValidation, 
nameValidation, 
ageValidation, 
talkValidation, 
watchedAtValidation, 
rateValidation, 
(_req, _res, next) => next());

module.exports = talkerPostValidation;