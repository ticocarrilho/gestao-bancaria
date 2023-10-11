const { Conta } = require('../models')

module.exports = {
  getConta(conta_id) {
    return Conta.findOne({ where: { conta_id }})
  },
  createConta(dadosConta) {
    return Conta.create(dadosConta)
  },
};