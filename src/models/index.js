const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  logging: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ArmazemModel = require('./armazemModel')(sequelize, DataTypes);
db.CooperativaModel = require('./cooperativaModel')(sequelize, DataTypes);
db.EnderecoModel = require('./enderecoModel')(sequelize, DataTypes);
db.EstoqueControleModel = require('./estoqueControleModel')(sequelize, DataTypes);
db.EstoqueModel = require('./estoqueModel')(sequelize, DataTypes);
db.FornecedorModel = require('./fornecedorModel')(sequelize, DataTypes);
db.FornecimentoModel = require('./fornecimentoModel')(sequelize, DataTypes);
db.LoteControleModel = require('./loteControleModel')(sequelize, DataTypes);
db.LoteModel = require('./loteModel')(sequelize, DataTypes);
db.MunicipioModel = require('./municipioModel')(sequelize, DataTypes);
db.SementeModel = require('./sementeModel')(sequelize, DataTypes);
db.UsuarioModel = require('./usuarioModel')(sequelize, DataTypes);

// Associations
if(db.ArmazemModel && db.EstoqueModel) db.ArmazemModel.hasMany(db.EstoqueModel, { foreignKey: 'armazemmodelId', as: 'estoqueModelList' });
if(db.EstoqueModel && db.ArmazemModel) db.EstoqueModel.belongsTo(db.ArmazemModel, { foreignKey: 'armazemmodelId', as: 'armazemmodel' });
if(db.EnderecoModel && db.CooperativaModel) db.EnderecoModel.hasMany(db.CooperativaModel, { foreignKey: 'enderecomodelId', as: 'cooperativasModelList' });
if(db.CooperativaModel && db.EnderecoModel) db.CooperativaModel.belongsTo(db.EnderecoModel, { foreignKey: 'enderecomodelId', as: 'enderecomodel' });
if(db.EnderecoModel && db.ArmazemModel) db.EnderecoModel.hasMany(db.ArmazemModel, { foreignKey: 'enderecomodelId', as: 'armazemModelList' });
if(db.ArmazemModel && db.EnderecoModel) db.ArmazemModel.belongsTo(db.EnderecoModel, { foreignKey: 'enderecomodelId', as: 'enderecomodel' });
if(db.EstoqueModel && db.EstoqueControleModel) db.EstoqueModel.hasMany(db.EstoqueControleModel, { foreignKey: 'estoquemodelId', as: 'estoqueControleModelList' });
if(db.EstoqueControleModel && db.EstoqueModel) db.EstoqueControleModel.belongsTo(db.EstoqueModel, { foreignKey: 'estoquemodelId', as: 'estoquemodel' });
if(db.FornecedorModel && db.FornecimentoModel) db.FornecedorModel.hasMany(db.FornecimentoModel, { foreignKey: 'fornecedormodelId', as: 'fornecimentoModels' });
if(db.FornecimentoModel && db.FornecedorModel) db.FornecimentoModel.belongsTo(db.FornecedorModel, { foreignKey: 'fornecedormodelId', as: 'fornecedormodel' });
if(db.FornecedorModel && db.LoteControleModel) db.FornecedorModel.hasMany(db.LoteControleModel, { foreignKey: 'fornecedormodelId', as: 'loteControleModels' });
if(db.LoteControleModel && db.FornecedorModel) db.LoteControleModel.belongsTo(db.FornecedorModel, { foreignKey: 'fornecedormodelId', as: 'fornecedormodel' });
if(db.FornecimentoModel && db.SementeModel) db.FornecimentoModel.hasMany(db.SementeModel, { foreignKey: 'fornecimentomodelId', as: 'sementes' });
if(db.SementeModel && db.FornecimentoModel) db.SementeModel.belongsTo(db.FornecimentoModel, { foreignKey: 'fornecimentomodelId', as: 'fornecimentomodel' });
if(db.LoteModel && db.LoteControleModel) db.LoteModel.hasMany(db.LoteControleModel, { foreignKey: 'lotemodelId', as: 'loteControleModelList' });
if(db.LoteControleModel && db.LoteModel) db.LoteControleModel.belongsTo(db.LoteModel, { foreignKey: 'lotemodelId', as: 'lotemodel' });
if(db.LoteModel && db.EstoqueControleModel) db.LoteModel.hasMany(db.EstoqueControleModel, { foreignKey: 'lotemodelId', as: 'estoqueControleModelList' });
if(db.EstoqueControleModel && db.LoteModel) db.EstoqueControleModel.belongsTo(db.LoteModel, { foreignKey: 'lotemodelId', as: 'lotemodel' });
if(db.MunicipioModel && db.EnderecoModel) db.MunicipioModel.hasMany(db.EnderecoModel, { foreignKey: 'municipiomodelId', as: 'enderecoModel' });
if(db.EnderecoModel && db.MunicipioModel) db.EnderecoModel.belongsTo(db.MunicipioModel, { foreignKey: 'municipiomodelId', as: 'municipiomodel' });
if(db.SementeModel && db.EstoqueModel) db.SementeModel.hasMany(db.EstoqueModel, { foreignKey: 'sementemodelId', as: 'estoqueModelList' });
if(db.EstoqueModel && db.SementeModel) db.EstoqueModel.belongsTo(db.SementeModel, { foreignKey: 'sementemodelId', as: 'sementemodel' });
if(db.SementeModel && db.LoteModel) db.SementeModel.hasMany(db.LoteModel, { foreignKey: 'sementemodelId', as: 'loteModelList' });
if(db.LoteModel && db.SementeModel) db.LoteModel.belongsTo(db.SementeModel, { foreignKey: 'sementemodelId', as: 'sementemodel' });
if(db.SementeModel && db.LoteControleModel) db.SementeModel.hasMany(db.LoteControleModel, { foreignKey: 'sementemodelId', as: 'loteControleModelList' });
if(db.LoteControleModel && db.SementeModel) db.LoteControleModel.belongsTo(db.SementeModel, { foreignKey: 'sementemodelId', as: 'sementemodel' });

module.exports = db;
