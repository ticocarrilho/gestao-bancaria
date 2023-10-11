const { sequelize } = require('../src/app/models')

beforeAll(() => {
  sequelize.truncate({ cascade: true, restartIdentity: true });
})

afterAll(() => {
  sequelize.close();
})
