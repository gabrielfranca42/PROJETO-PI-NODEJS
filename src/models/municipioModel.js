module.exports = (sequelize, DataTypes) => {
  const MunicipioModel = sequelize.define('MunicipioModel', {
    id: { type: DataTypes.INTEGER, allowNull: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
    Cnpj: { type: DataTypes.INTEGER, allowNull: false },
  }, { tableName: 'municipiomodels', timestamps: true });
  return MunicipioModel;
};