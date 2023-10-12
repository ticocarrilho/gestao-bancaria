const { Transacao, Conta } = require('../../src/app/models')

const dadosConta = {
  saldo: 100,
  conta_id: Math.random()
}

const dadosTransacao = {
  forma_pagamento: 'D',
  valor: 10,
}

describe('Transacao', () => {
  it('deve criar uma transação sem erro', async () => {
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({...dadosTransacao, conta_id: conta.id })).resolves.not.toThrowError();
  })

  it('deve dar erro ao criar uma transação com forma de pagamento invalida', async () => {
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({...dadosTransacao, forma_pagamento: 'X', conta_id: conta.id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação com valor menor que 1', async () => {
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({...dadosTransacao, valor: 0, conta_id: conta.id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação com tipo incorreto de forma de pagamento', async () => {
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({...dadosTransacao, forma_pagamento: true, conta_id: conta.id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação sem forma de pagamento', async () => {
    const { valor } = dadosTransacao;
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({ valor, conta_id: conta.id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação sem valor', async () => {
    const { forma_pagamento } = dadosTransacao;
    const conta = await Conta.create(dadosConta);
    await expect(Transacao.create({ forma_pagamento, conta_id: conta.id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação sem conta_id', async () => {
    await expect(Transacao.create(dadosTransacao)).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma transação com uma conta inexistente', async () => {
    await Conta.create(dadosConta);
    await expect(Transacao.create({...dadosTransacao, conta_id: 1235 })).rejects.toThrowError();
  })

});