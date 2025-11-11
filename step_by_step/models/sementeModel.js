module.exports = (sequelize, DataTypes) => {
  const SementeModel = sequelize.define('SementeModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    validade: { type: DataTypes.INTEGER, allowNull: true },
    especie: { type: DataTypes.STRING, allowNull: true },
    fornecimentoModel: { type: DataTypes.INTEGER, allowNull: false },
  }, { tableName: 'sementemodels', timestamps: true });
  return SementeModel;
};