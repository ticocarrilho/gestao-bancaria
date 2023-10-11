const request = require('supertest');

const app = require('../../src/app');
const { Conta } = require('../../src/app/models')

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
    await Conta.create(dadosConta)
    const response = await request(app).post('/conta').send(dadosConta);
    expect(response.status).toBe(403);
  });

});

describe('GET /conta', () => {
  
});