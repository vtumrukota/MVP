var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {

  var contactRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/contacts', contactRouter);

  require('./routes.js')(contactRouter);
};