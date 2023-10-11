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
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
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