const contaService = require('../services/contaService')

module.exports = {
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