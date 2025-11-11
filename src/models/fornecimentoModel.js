module.exports = (sequelize, DataTypes) => {
  const FornecimentoModel = sequelize.define('FornecimentoModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    fornecedor: { type: DataTypes.INTEGER, allowNull: false },
  }, { tableName: 'fornecimentomodels', timestamps: true });
  return FornecimentoModel;
};