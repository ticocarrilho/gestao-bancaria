const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factory');

const dadosConta = { conta_id: '1234', saldo: '10' };

describe('POST /conta', () => {
  it('deve criar uma conta', async () => {
    const response = await request(app).post('/conta').send(dadosConta);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(dadosConta);
  });

  it('deve dar erro ao criar uma conta com saldo negativo', async () => {
    const response = await request(app).post('/conta').send({ ...dadosConta, saldo: -1 });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma conta sem conta_id', async () => {
    const { saldo } = dadosConta;
    const response = await request(app).post('/conta').send({ saldo });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma conta sem saldo', async () => {
    const { conta_id } = dadosConta;
    const response = await request(app).post('/conta').send({ conta_id });
    expect(response.status).toBe(400);
  });

  it('deve dar erro ao criar uma conta com conta_id já existente', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).post('/conta').send({ conta_id: conta.conta_id, saldo: conta.saldo});
    expect(response.status).toBe(400);
  });

});

describe('GET /conta', () => {
  it('deve retornar informações da conta', async () => {
    const conta = await factory.create('Conta');
    const response = await request(app).get('/conta').query({ id: conta.conta_id });
    expect(response.body).toMatchObject({ conta_id: conta.conta_id, saldo: conta.saldo });
  });

  it('deve retornar erro 404 para ID de conta não existente', async () => {
    await factory.create('Conta');
    const response = await request(app).get('/conta').query({ id: 123123123123 });
    expect(response.status).toBe(404);
  });
});