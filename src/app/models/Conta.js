module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    saldo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    conta_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Conta.associate = function(models) {
    Conta.hasMany(models.transacao, { foreignKey: 'conta_id', as: 'conta' });
  }

  return Conta;
};