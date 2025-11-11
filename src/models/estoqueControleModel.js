module.exports = (sequelize, DataTypes) => {
  const EstoqueControleModel = sequelize.define('EstoqueControleModel', {
    id: { 
      type: DataTypes.BIGINT, 
      allowNull: false,     
      primaryKey: true,       
      autoIncrement: true    
    },
    localArmazenamento: { type: DataTypes.STRING, allowNull: true },
    quantidadeAtual: { type: DataTypes.DECIMAL, allowNull: true },
    dataUltimaAtualizacao: { type: DataTypes.DATE, allowNull: true },
    estoqueModel: { type: DataTypes.INTEGER, allowNull: true },
    loteModel: { type: DataTypes.INTEGER, allowNull: true },
    cooperativaModel: { type: DataTypes.INTEGER, allowNull: true },
  }, { 
    tableName: 'estoquecontrolemodels', 
    timestamps: true // defina como false se não houver colunas createdAt/updatedAt
  });

  return EstoqueControleModel;
};
