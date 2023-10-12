const contaService = require('../services/contaService')
const transacaoService = require('../services/transacaoService')

module.exports = {
  async store(req, res) {
    const { forma_pagamento, valor, conta_id } = req.body;
    try {
      const conta = (
        await contaService.getConta(`${conta_id}`)
      )

      if(!conta) {
        return res.status(404).json({ message: `Não foi encontrado nenhuma conta com o ID ${conta_id}.` });
      }

      if(valor > conta.saldo) {
        return res.status(404).json({ message: `Valor da transação superior ao saldo da conta.` });
      }
      
      await transacaoService.createTransacao(forma_pagamento, valor, conta);
      res.status(201).json({ conta_id: conta.conta_id, saldo: conta.saldo });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Não foi possível criar a transação.' });
    }
  },
};