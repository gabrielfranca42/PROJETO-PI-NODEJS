module.exports = (sequelize, DataTypes) => {
  const CooperativaModel = sequelize.define('CooperativaModel', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,      
      autoIncrement: true,   
      allowNull: false
    },
    nome: { type: DataTypes.STRING, allowNull: false },
    cnpj: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    enderecoModel: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    tableName: 'cooperativamodels',
    timestamps: true // coloque false se não tiver createdAt / updatedAt
  });

  return CooperativaModel;
};
