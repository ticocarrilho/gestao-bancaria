const express = require('express');
const routes = express.Router();
const ContaController = require('../app/controller/contaController');

routes.post(
  '/',
  ContaController.store
);

module.exports = routes;