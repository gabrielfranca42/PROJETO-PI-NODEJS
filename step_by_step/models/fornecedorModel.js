module.exports = (sequelize, DataTypes) => {
  const FornecedorModel = sequelize.define('FornecedorModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    rua: { type: DataTypes.STRING, allowNull: true },
    numero: { type: DataTypes.STRING, allowNull: true },
    complemento: { type: DataTypes.STRING, allowNull: true },
    bairro: { type: DataTypes.STRING, allowNull: true },
    cidade: { type: DataTypes.STRING, allowNull: true },
    estado: { type: DataTypes.STRING, allowNull: true },
    cep: { type: DataTypes.STRING, allowNull: true },
    pontoReferencia: { type: DataTypes.STRING, allowNull: true },
  }, { tableName: 'fornecedormodels', timestamps: true });
  return FornecedorModel;
};