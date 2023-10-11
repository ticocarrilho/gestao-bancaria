const { sequelize } = require('../src/app/models')

beforeEach(async () => {
  await sequelize.truncate({ cascade: true, restartIdentity: true });
})

afterAll(() => {
  sequelize.close();
})
