const contaService = require('../services/contaService')

module.exports = {
  async get(req, res) {
    const { id } = req.query;
    try {
      const conta = (
        await contaService.getConta(id)
      )

      if(!conta) {
        return res.status(404).json({ message: `Não foi encontrado nenhuma conta com o ID ${id}.` });
      }

      const { conta_id, saldo } = conta;

      res.json({ conta_id, saldo });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Não foi possível encontrar a conta.' });
    }
  },
  async store(req, res) {
    const { conta_id, saldo } = req.body;
    try {
      const conta = (
        await contaService.createConta({ conta_id, saldo })
      ).toJSON();
      res.status(201).json({ conta_id: conta.conta_id, saldo: conta.saldo });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Não foi possível criar a conta.' });
    }
  },
};