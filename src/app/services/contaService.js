const { Conta } = require('../models')

module.exports = {
  createConta(dadosConta) {
    return Conta.create(dadosConta)
  },
};