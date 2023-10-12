module.exports = (sequelize, DataTypes) => {
  const Transacao = sequelize.define('Transacao', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    forma_pagamento: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate: { isIn: [['D', 'C', 'P']] }
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { min: 1 }
    },
    conta_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'transacoes'
  });

  Transacao.associate = function(models) {
    Transacao.belongsTo(models.Conta, { foreignKey: 'conta_id', as: 'conta' });
  }

  return Transacao;
};