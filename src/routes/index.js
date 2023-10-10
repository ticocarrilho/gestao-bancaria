const express = require('express');
const routes = express.Router();
const ContaRoutes = require('./contaRoutes');
const TransacaoRoutes = require('./transacaoRoutes');

routes.use('/conta', ContaRoutes);
routes.use('/transacao', TransacaoRoutes);

module.exports = routes;