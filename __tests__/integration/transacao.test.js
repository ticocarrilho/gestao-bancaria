const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factory');

const { dadosTransacao } = require('../dados')


describe('POST /transacao', () => {
  it('deve criar uma transacao', async () => {
    const conta = await factory.create('Conta');

    const response = await request(app).post('/transacao').send({ ...dadosTransacao, conta_id: conta.conta_id });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ conta_id: conta.conta_id, saldo: conta.saldo - dadosTransacao.valor });
  });

  it('deve dar erro ao criar transacao com valor superior ao saldo da conta', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/transacao').send({ ...dadosTransacao, conta_id: conta.conta_id, valor: conta.saldo + 1000 });
    expect(response.status).toBe(404);
  });

  it('deve dar erro ao criar uma transacao para uma conta inexistente', async () => {
    const response = await request(app).post('/transacao').send({ ...dadosTransacao, conta_id: Math.random() });
    expect(response.status).toBe(404);
  });

  it('deve dar erro ao criar uma transacao sem conta_id', async () => {
    const response = await request(app).post('/conta').send({ ...dadosTransacao });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma transacao com forma de pagamento invalido', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/conta').send({ ...dadosTransacao, conta_id: conta.conta_id, forma_pagamento: 'X' });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma transacao sem forma de pagamento', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/conta').send({ valor: dadosTransacao.valor, conta_id: conta.conta_id });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma transacao sem valor', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/conta').send({ forma_pagamento: dadosTransacao.forma_pagamento, conta_id: conta.conta_id });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma transacao com valor invalido', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/conta').send({ ...dadosTransacao, valor: 0, conta_id: conta.conta_id });
    expect(response.status).toBe(400);
  });
});
