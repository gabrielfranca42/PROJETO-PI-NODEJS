module.exports = (sequelize, DataTypes) => {
  const EstoqueModel = sequelize.define('EstoqueModel', {
    id: { 
      type: DataTypes.BIGINT, 
      allowNull: false,       
      primaryKey: true,       
      autoIncrement: true    
    },
    quantidade: { 
      type: DataTypes.DECIMAL, 
      allowNull: false 
    },
    armazem: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    semente: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  }, { 
    tableName: 'estoquemodels', 
    timestamps: true 
  });

  return EstoqueModel;
};
