module.exports = (sequelize, DataTypes) => {
  const CooperativaModel = sequelize.define('CooperativaModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cnpj: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.STRING, allowNull: false },
    qntdAgricultor: { type: DataTypes.INTEGER, allowNull: false },
    dataCadastro: { type: DataTypes.DATEONLY, allowNull: true },
    enderecoModel: { type: DataTypes.INTEGER, allowNull: true },
  }, { tableName: 'cooperativamodels', timestamps: true });
  return CooperativaModel;
};