module.exports = (sequelize, DataTypes) => {
  const LoteModel = sequelize.define('LoteModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    sementeModel: { type: DataTypes.INTEGER, allowNull: false },
    dataEntrada: { type: DataTypes.DATE, allowNull: true },
    dataSaida: { type: DataTypes.DATE, allowNull: true },
    peso: { type: DataTypes.DECIMAL, allowNull: false },
    metroCubico: { type: DataTypes.DECIMAL, allowNull: false },
    identificacao: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'lotemodels', timestamps: true });
  return LoteModel;
};