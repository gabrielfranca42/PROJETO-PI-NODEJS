module.exports = (sequelize, DataTypes) => {
  const LoteControleModel = sequelize.define('LoteControleModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    loteModel: { type: DataTypes.INTEGER, allowNull: false },
    sementeModel: { type: DataTypes.INTEGER, allowNull: false },
    fornecedor: { type: DataTypes.INTEGER, allowNull: false },
    dataUltimaAtualizacao: { type: DataTypes.DATE, allowNull: true },
    dataValidade: { type: DataTypes.DATEONLY, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: true },
  }, { tableName: 'lotecontrolemodels', timestamps: true });
  return LoteControleModel;
};