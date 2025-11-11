module.exports = (sequelize, DataTypes) => {
  const EstoqueControleModel = sequelize.define('EstoqueControleModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    localArmazenamento: { type: DataTypes.STRING, allowNull: true },
    quantidadeAtual: { type: DataTypes.DECIMAL, allowNull: true },
    dataUltimaAtualizacao: { type: DataTypes.DATE, allowNull: true },
    estoqueModel: { type: DataTypes.INTEGER, allowNull: true },
    loteModel: { type: DataTypes.INTEGER, allowNull: true },
    cooperativaModel: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'estoquecontrolemodels', timestamps: true });
  return EstoqueControleModel;
};