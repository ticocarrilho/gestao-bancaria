const { factory } = require('factory-girl');
const { Conta, Transacao } = require('../src/app/models')

factory.define('Conta', Conta, {
  saldo: 100,
  conta_id: Math.random()
});
factory.define('Transacao', Transacao, {
  forma_pagamento: 'D',
  valor: 10,
});

module.exports = factory;