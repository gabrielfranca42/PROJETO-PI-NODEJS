module.exports = (sequelize, DataTypes) => {
  const UsuarioModel = sequelize.define('UsuarioModel', {
    id: { type: DataTypes.BIGINT, allowNull: true },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'usuariomodels', timestamps: true });
  return UsuarioModel;
};