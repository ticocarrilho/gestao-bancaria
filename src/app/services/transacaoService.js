const { Transacao } = require('../models')

module.exports = {
  createTransacao: async (forma_pagamento, valor, conta) => {
    conta.saldo = conta.saldo - valor;
    await conta.save();
    return Transacao.create({ forma_pagamento, valor, conta_id: conta.id});
  }
};