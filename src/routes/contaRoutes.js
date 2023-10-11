const express = require('express');
const routes = express.Router();
const ContaController = require('../app/controller/contaController');

routes.get(
  '/',
  ContaController.get
);
routes.post(
  '/',
  ContaController.store
);

module.exports = routes;