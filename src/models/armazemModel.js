module.exports = (sequelize, DataTypes) => {
  const ArmazemModel = sequelize.define('ArmazemModel', {
    id: { 
      type: DataTypes.BIGINT, 
      primaryKey: true,        
      autoIncrement: true,     
      allowNull: false 
    },
    nome: { type: DataTypes.STRING, allowNull: false },
    cnpj: { type: DataTypes.STRING, allowNull: false },
    capacidade: { type: DataTypes.DECIMAL, allowNull: false },
    enderecoModel: { type: DataTypes.INTEGER, allowNull: false },
  }, { 
    tableName: 'armazemmodels', 
    timestamps: true 
  });

  return ArmazemModel;
};