module.exports = (sequelize, DataTypes) => {
  const ArmazemModel = sequelize.define('ArmazemModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cnpj: { type: DataTypes.STRING, allowNull: false },
    capacidade: { type: DataTypes.DECIMAL, allowNull: false },
    enderecoModel: { type: DataTypes.INTEGER, allowNull: false },
  }, { tableName: 'armazemmodels', timestamps: true });
  return ArmazemModel;
};