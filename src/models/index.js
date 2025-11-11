const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// 🔧 Conexão com o banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

// 📦 Inicialização dos models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 🔹 Importação dos Models
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

// 🔗 Definição das Associações
if (db.ArmazemModel && db.EstoqueModel) {
  db.ArmazemModel.hasMany(db.EstoqueModel, {
    foreignKey: 'armazemmodelId',
    as: 'estoqueModelList',
  });
  db.EstoqueModel.belongsTo(db.ArmazemModel, {
    foreignKey: 'armazemmodelId',
    as: 'armazemmodel',
  });
}

if (db.EnderecoModel && db.CooperativaModel) {
  db.EnderecoModel.hasMany(db.CooperativaModel, {
    foreignKey: 'enderecomodelId',
    as: 'cooperativasModelList',
  });
  db.CooperativaModel.belongsTo(db.EnderecoModel, {
    foreignKey: 'enderecomodelId',
    as: 'enderecomodel',
  });
}

if (db.EnderecoModel && db.ArmazemModel) {
  db.EnderecoModel.hasMany(db.ArmazemModel, {
    foreignKey: 'enderecomodelId',
    as: 'armazemModelList',
  });
  db.ArmazemModel.belongsTo(db.EnderecoModel, {
    foreignKey: 'enderecomodelId',
    as: 'enderecomodel',
  });
}

if (db.EstoqueModel && db.EstoqueControleModel) {
  db.EstoqueModel.hasMany(db.EstoqueControleModel, {
    foreignKey: 'estoquemodelId',
    as: 'estoqueControleModelList',
  });
  db.EstoqueControleModel.belongsTo(db.EstoqueModel, {
    foreignKey: 'estoquemodelId',
    as: 'estoquemodel',
  });
}

if (db.FornecedorModel && db.FornecimentoModel) {
  db.FornecedorModel.hasMany(db.FornecimentoModel, {
    foreignKey: 'fornecedormodelId',
    as: 'fornecimentoModels',
  });
  db.FornecimentoModel.belongsTo(db.FornecedorModel, {
    foreignKey: 'fornecedormodelId',
    as: 'fornecedormodel',
  });
}

if (db.FornecedorModel && db.LoteControleModel) {
  db.FornecedorModel.hasMany(db.LoteControleModel, {
    foreignKey: 'fornecedormodelId',
    as: 'loteControleModels',
  });
  db.LoteControleModel.belongsTo(db.FornecedorModel, {
    foreignKey: 'fornecedormodelId',
    as: 'fornecedormodel',
  });
}

if (db.FornecimentoModel && db.SementeModel) {
  db.FornecimentoModel.hasMany(db.SementeModel, {
    foreignKey: 'fornecimentomodelId',
    as: 'sementes',
  });
  db.SementeModel.belongsTo(db.FornecimentoModel, {
    foreignKey: 'fornecimentomodelId',
    as: 'fornecimentomodel',
  });
}

if (db.LoteModel && db.LoteControleModel) {
  db.LoteModel.hasMany(db.LoteControleModel, {
    foreignKey: 'lotemodelId',
    as: 'loteControleModelList',
  });
  db.LoteControleModel.belongsTo(db.LoteModel, {
    foreignKey: 'lotemodelId',
    as: 'lotemodel',
  });
}

if (db.LoteModel && db.EstoqueControleModel) {
  db.LoteModel.hasMany(db.EstoqueControleModel, {
    foreignKey: 'lotemodelId',
    as: 'estoqueControleModelList',
  });
  db.EstoqueControleModel.belongsTo(db.LoteModel, {
    foreignKey: 'lotemodelId',
    as: 'lotemodel',
  });
}

if (db.MunicipioModel && db.EnderecoModel) {
  db.MunicipioModel.hasMany(db.EnderecoModel, {
    foreignKey: 'municipiomodelId',
    as: 'enderecoModel',
  });
  db.EnderecoModel.belongsTo(db.MunicipioModel, {
    foreignKey: 'municipiomodelId',
    as: 'municipiomodel',
  });
}

if (db.SementeModel && db.EstoqueModel) {
  db.SementeModel.hasMany(db.EstoqueModel, {
    foreignKey: 'sementemodelId',
    as: 'estoqueModelList',
  });
  db.EstoqueModel.belongsTo(db.SementeModel, {
    foreignKey: 'sementemodelId',
    as: 'sementemodel',
  });
}

if (db.SementeModel && db.LoteModel) {
  db.SementeModel.hasMany(db.LoteModel, {
    foreignKey: 'sementemodelId',
    as: 'loteModelList',
  });
  db.LoteModel.belongsTo(db.SementeModel, {
    foreignKey: 'sementemodelId',
    as: 'sementemodel',
  });
}

if (db.SementeModel && db.LoteControleModel) {
  db.SementeModel.hasMany(db.LoteControleModel, {
    foreignKey: 'sementemodelId',
    as: 'loteControleModelList',
  });
  db.LoteControleModel.belongsTo(db.SementeModel, {
    foreignKey: 'sementemodelId',
    as: 'sementemodel',
  });
}

// 🚀 Exporta o objeto de conexão e os models
module.exports = db;
