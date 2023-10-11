const { Conta } = require('../../src/app/models')

const dadosConta = {
  saldo: 100,
  conta_id: Math.random()
}

describe('Conta', () => {
  it('deve criar uma conta sem erro', async () => {
    await expect(Conta.create(dadosConta)).resolves.not.toThrowError();
  })


  it('deve dar erro ao criar uma conta sem a propriedade de saldo', async () => {
    const { conta_id } = dadosConta;
    await expect(Conta.create({ conta_id })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma conta sem a propriedade de conta_id', async () => {
    const { saldo } = dadosConta;
    await expect(Conta.create({ saldo })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma conta com tipo de saldo incorreto', async () => {
    await expect(Conta.create({ ...dadosConta, saldo: 'a'})).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma conta com tipo de saldo negativo', async () => {
    await expect(Conta.create({ ...dadosConta, saldo: -1 })).rejects.toThrowError();
  })

  it('deve dar erro ao criar uma conta com um conta_id já existente', async () => {
    await expect(Conta.create(dadosConta)).resolves.not.toThrowError();
    await expect(Conta.create(dadosConta)).rejects.toThrowError();
  })

});