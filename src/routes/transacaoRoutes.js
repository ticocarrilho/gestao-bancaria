const express = require('express');
const routes = express.Router();
const TransacaoController = require('../app/controller/transacaoController');

routes.post(
  '/',
  TransacaoController.store
);

module.exports = routes;