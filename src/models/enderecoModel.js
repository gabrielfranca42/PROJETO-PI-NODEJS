module.exports = (sequelize, DataTypes) => {
  const EnderecoModel = sequelize.define('EnderecoModel', {
    id: { 
      type: DataTypes.BIGINT, 
      allowNull: false, 
      primaryKey: true,   
      autoIncrement: true  
    },
    rua: { type: DataTypes.STRING, allowNull: true },
    numero: { type: DataTypes.STRING, allowNull: true },
    complemento: { type: DataTypes.STRING, allowNull: true },
    bairro: { type: DataTypes.STRING, allowNull: true },
    cidade: { type: DataTypes.STRING, allowNull: true },
    estado: { type: DataTypes.STRING, allowNull: true },
    cep: { type: DataTypes.STRING, allowNull: true },
    pontoReferencia: { type: DataTypes.STRING, allowNull: true },
    municipioModel: { type: DataTypes.INTEGER, allowNull: true },
    fornecedorModel: { type: DataTypes.INTEGER, allowNull: true },
  }, { 
    tableName: 'enderecomodels', 
    timestamps: true // altere para false se sua tabela não tiver createdAt / updatedAt
  });

  return EnderecoModel;
};
